import Notes from "../models/notesModels.js";

export const postNotes = async (req, res) => {
    try {
        // Spliting data from req.bady to multiple varibles
        const { title, date, note, email } = req.body;
        const notes = await Notes.create({
            title,
            date,
            note,
            email,
        });
        if (notes) {
            res.status(201).json({
                message: "Note added successfully ",
            });
        } else {
            // if movie is not created saying movie is not created
            res.status(400);
            throw new Error("failed to create");
        }
    } catch (error) {
        return res.status(500).send({ error });
    }
}

export const getMethod = async (req,res) => {
    try{
        const id = req.params.id;
        const notes = await Notes.find({ email: id })
        if(notes){
            res.status(200).json({notes});
        }else{
            res.status(500).json({"message":"can't find notes"});
        }
    } catch (error){
        res.status(500).send({error});
    }
}