const {Tutorial} = require('../../models/model')

const handle = {
    allTutors: async(req,res)=>{
        const {title} = req.query
        let obj
        (!title) ? obj = {} : obj = { where: {title} }
        const tutor = await Tutorial.findAll(obj)
        res.send(tutor)
    },
    createTutor: async(req,res) =>{
        const data = req.body
        const tutorial = await Tutorial.create(data)
        res.send('created')
    },
    findTutorById: async(req,res) =>{
        const {id} = req.params
        const tutor = await Tutorial.findByPk(id)
        res.send(tutor)
    },
    update: async(req,res) =>{
        const {id} = req.params;
        const { title, description, published} = req.body      
        console.log(req.body, req.params)
        await Tutorial.update({
            title,
            description,
            published
        },{
            where:{
                id: id
            }
        })
        res.send('updated')
    },
    delete: async(req,res) =>{
        const {id} = req.params;
        await Tutorial.destroy({
            where:{
                id: id
            }
        })
        res.send('deleted')
    },
    deleteAll: async(req,res) =>{
        await Tutorial.destroy({
            truncate: true
        })
        res.send('deleted')
    }
}

module.exports = handle;