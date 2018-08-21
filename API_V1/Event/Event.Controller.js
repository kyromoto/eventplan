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

exports.notImplemented = (req, res) => res.status(501).json();