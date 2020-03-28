
const FirstController = {
    iswork: (req, res, next) => {
        res.render('index', { title: 'Express' })
    }
}

module.exports = FirstController