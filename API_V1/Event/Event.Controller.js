const Event = require('./Event.Model');

exports.eventList = (req, res) => {
    Event.find({}, (err, events) => {
        if(err) {
            console.error(err);
            return res.status(400).json(err);
        }
        return res.json(events);
    });
}

exports.eventDetails = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if(err) {
            console.error(err);
            return res.status(400).json(err);
        }
        return res.json(event);
    });
}

exports.eventCreate = (req, res) => {
    new Event(req.body).save((err, event) => {
        if(err) return res.status(400).json(err);
        return res.json(event);
    });
}

exports.eventUpdate = (req, res) => {
    Event.findOneAndUpdate(req.params.id, req.body, (err, event) => {
        if(err) return res.status(400).json(err);
        return res.json(event);
    });
}

exports.eventDelete = (req, res) => {
    Event.findByIdAndRemove(req.params.id, (err, event) => {
        if(err) return res.status(400).json(err);
        return res.json(event);
    });
}

exports.notImplemented = (req, res) => res.status(501).json();