// controllers/complaintController.js
const Complaint = require('../models/complaintModel');

exports.submitComplaint = async (req, res) => {
    const { description, userId } = req.body;
    try {
        const newComplaint = await Complaint.create({ description, userId });
        res.json({ message: 'Complaint submitted successfully!', complaint: newComplaint });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit complaint.' });
    }
};
