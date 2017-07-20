'use strict';

var customer = require('./customer.model');
function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();responseWithResult
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

exports.showCustomer = function (req, res) {
 

  const data = {
    email: (req.body.email).toLowerCase(),
    domainId: req.body.domainId
  };
//  console.log(data);
  let showCustomer = {}

  // if (data.email === '' || data.email === null) {

  //   showCustomer.error = true;
  //   showCustomer.message = `agentName cant be empty.`;
  //   res.status(412).json(showCustomer);

  // } else if (data.password === '' || data.password === null) {

  //   showCustomer.error = true;
  //   showCustomer.message = `password cant be empty.`;
  //   res.status(412).json(showCustomer);

  // } else {

  //   agent.findOne({ email: data.email }).then(function (agent) {
  //     console.log(agent);
      if (customer.domainName === data.domainName) {
        res.status(200).json(customer.domainId);
      }
      else {
        res.status(500).json({});
      }
  //   });

  // }
}


// Gets a list of all Customers
exports.index = function(req,res) {
    console.log("reached");
customer.find()
    .then(responseWithResult(res))
    .catch(handleError(res));
};
exports.show = function(req, res) {
 customer.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};
exports.create = function(req, res) {
  customer.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};
 