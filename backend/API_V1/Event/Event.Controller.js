const Event = require('./Event.Model');

exports.listEvents = (req, res) => {
    Event.find({}, (err, events) => {
        if(err) {
            console.error(err);
            return res.status(400).json(err);
        }

        //if list has no entrys => set status to NoContent(204)
        if(events.length == 0) return res.status(204).json({
            "data" : {
                "events" : events
            }
        });

        return res.json({
            "data" : events
        });
    });
}

exports.getEvent = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if(err) {
            console.error(err);
            return res.status(400).json(err);
        }
        return res.json({ "events" : event});
    });
}

exports.createEvent = (req, res) => {
    new Event(req.body).save((err, event) => {
        if(err) return res.status(400).json(err);
        return res.json(event);
    });
}

exports.updateEvent = (req, res) => {
    Event.findOneAndUpdate(req.params.id, req.body, (err, event) => {
        if(err) return res.status(400).json(err);
        return res.json(event);
    });
}

exports.deleteEvent = (req, res) => {
    Event.findByIdAndRemove(req.params.id, (err, event) => {
        if(err) return res.status(400).json(err);
        return res.json(event);
    });
}

exports.actionNotImplemented = (req, res) => res.status(501).json();