const Models = require('../model/index')

exports.getList = async(req, res) => {
    try {
        const getData = await Models.find({})
        res.send({getData})
    } catch (error) {
        res.send(error)
    }
}
exports.addList = async(req, res) => {
    try {
        let name = req.body
        const addData = await Models.create(name)
        res.send({addData})
    } catch (error) {
        res.send(error)
    }
}
exports.deleteList = async(req, res) => {
    try {
        let id = req.params.id
        const deleteData = await Models.findByIdAndDelete(id)
        res.send({deleteData})
    } catch (error) {
        res.send(error)
    }
}
exports.updateList = async(req, res) => {
    try {
        let id = req.params.id
        let name = req.body
        const updateData = await Models.findByIdAndUpdate(id, name, {'new': true})
        res.send({updateData})
    } catch (error) {
        res.send(error)
    }
}
exports.searchList = async(req, res) => {
    try {
        let textSearch = req.query.textSearch
        let limit = parseInt(req.query.limit)
        let activePage = parseInt(req.query.activePage)
        let skip = (activePage - 1) * limit
        let totalRecord = await Models.countDocuments({name: {$regex: textSearch, $options: 'i'}})
        let totalPage = Math.ceil(totalRecord / limit)

        const listData = await Models.find({name: {$regex: textSearch, $options: 'i'}}).skip(skip).limit(limit)
        res.send({
            totalPage: totalPage,
            listData,
            totalRecord
        })
    } catch (error) {
        res.send(error)
    }
}
exports.paginationList = async(req, res) => {
    try {
        let activePage = parseInt(req.query.activePage)
        let limit = parseInt(req.query.limit)
        let skip = (activePage - 1) * limit
        let totalRecord = await Models.estimatedDocumentCount()
        let totalPage = Math.ceil(totalRecord / limit)
        const pagination = await Models.find({}).skip(skip).limit(limit)
        res.send({
            pagination,
            totalPage
        })
    } catch (error) {
        res.send(error)
    }
}