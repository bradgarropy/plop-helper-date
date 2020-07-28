const {format} = require("date-fns")

const helpers = plop => {
    plop.setDefaultInclude({helpers: true})

    plop.setHelper("date", () => {
        const date = format(Date.now(), "yyyy-MM-dd")
        return date
    })
}

module.exports = helpers
