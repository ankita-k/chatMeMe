'use strict';




var agent = require('./agent.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}


function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end(); responseWithResult
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function (entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function (updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function () {
          res.status(204).end();
        });
    }
  };
}

exports.login = function (req, res) {
 

  const data = {
    email: (req.body.email).toLowerCase(),
    password: req.body.password
  };
//  console.log(data);
  let loginResponse = {}

  if (data.email === '' || data.email === null) {

    loginResponse.error = true;
    loginResponse.message = `agentName cant be empty.`;
    res.status(412).json(loginResponse);

  } else if (data.password === '' || data.password === null) {

    loginResponse.error = true;
    loginResponse.message = `password cant be empty.`;
    res.status(412).json(loginResponse);

  } else {

    agent.findOne({ email: data.email }).then(function (agent) {
      console.log(agent);
      if (agent.password === data.password) {
        res.status(200).json(agent);
      }
      else {
        res.status(500).json({});
      }
    });

  }
}
exports.registerAgent = function (req, res) {
  const data = {
    agentName: (req.body.name),
    email: req.body.email,
    password: req.body.password
  };

  let registrationResponse = {}

  if (data.agentName === '') {

    registrationResponse.error = true;
    registrationResponse.message = `agentName cant be empty.`;
    res.status(412).json(registrationResponse);

  } else if (data.email === '') {

    registrationResponse.error = true;
    registrationResponse.message = `email cant be empty.`;
    res.status(412).json(registrationResponse);

  } else if (data.password === '') {

    registrationResponse.error = true;
    registrationResponse.message = `password cant be empty.`;
    res.status(412).json(registrationResponse);

  } else {

    data.timestamp = Math.floor(new Date() / 1000);
    data.online = 'Y';
    data.socketId = '';

    helper.registerAgent(data, (error, result) => {

      if (error) {

        registrationResponse.error = true;
        registrationResponse.message = `Server error.`;
        res.status(404).json(registrationResponse);
      } else {

        registrationResponse.error = false;
        registrationResponse.agentId = result.insertedId;
        registrationResponse.message = `agent registration successful.`;
        res.status(200).json(registrationResponse);
      }
    });
  }



}
exports.agentNameCheck = function (req, res) {

  if (req.body.agentName === "") {
    res.status(412).json({
      error: true,
      message: `agentName cant be empty.`
    });
  } else {
    helper.agentNameCheck({
      agentName: req.body.agentName.toLowerCase()
    }, (count) => {

      let result = {};

      if (count > 0) {
        result.error = true;
      } else {
        result.error = false;
      }
      res.status(200).json(result);
    });
  }
}


// Gets a list of all Customers
exports.index = function (req, res) {
  console.log("reached");
  agent.find()
    .then(responseWithResult(res))
    .catch(handleError(res));
};
exports.show = function (req, res) {
  agent.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};
exports.create = function (req, res) {
  console.log(req.body);
  agent.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

