const viewAdmin = (req,res) => {
    return res.render('admin/viewadmin');
}

const addAdminPage = (req,res) => {
    return res.render('admin/addadmin');
}

module.exports = {
    viewAdmin,addAdminPage
}