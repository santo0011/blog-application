const categoryModel = require('../../models/categoryModel');
const tagModel = require('../../models/tagModel');
const { responseReturn } = require('../../utiles/response');


class categoryController {

    //   add_category_cont
    add_category_cont = async (req, res) => {
        const { categoryName, categoryDes } = req.body;

        const error = {};

        if (!categoryName) {
            error.categoryName = 'Please provide category name';
        }
        if (!categoryDes) {
            error.categoryDes = 'Please provide category description'
        }

        if (Object.keys(error).length == 0) {
            const categorySlug = categoryName.trim().split(' ').join('-');
            try {
                const checkCategory = await categoryModel.findOne({ categorySlug });
                if (checkCategory) {
                    responseReturn(res, 404, { error: "Category already added" })
                } else {
                    await categoryModel.create({
                        categoryName: categoryName.trim(),
                        categorySlug,
                        categoryDes
                    });
                    responseReturn(res, 200, { message: "Category add successfull" })
                }

            } catch (error) {
                responseReturn(res, 500, { error: "Internal server error" })
            }
        } else {
            responseReturn(res, 400, { error: error })
        }
    }


    // category_get
    category_get = async (req, res) => {
        const { searchValue, page, parPage } = req.query;
        const skipPage = parseInt(parPage) * (parseInt(page) - 1);
        try {

            if (searchValue) {
                const categorys = await categoryModel.find({ categoryName: { $regex: searchValue, $options: 'i' } }).sort({ createdAt: -1 });
                const categoryCount = await categoryModel.find({}).countDocuments();
                responseReturn(res, 200, {
                    allCategory: categorys,
                    categoryCount
                });

            } else {
                const categorys = await categoryModel.find({}).skip(skipPage).limit(parPage).sort({ createdAt: -1 });
                const categoryCount = await categoryModel.find({}).countDocuments();
                responseReturn(res, 200, {
                    allCategory: categorys,
                    categoryCount
                })
            }

        } catch (error) {
            responseReturn(res, 400, { error: error })
        }
    }

    // category_delete
    category_delete = async (req, res) => {
        const { categoryId } = req.params;
        try {
            await categoryModel.findByIdAndDelete(categoryId);
            responseReturn(res, 200, {
                message: "Category delete success"
            });

        } catch (error) {
            console.log(error.message)
        }
    }

    // category_edit
    category_edit = async (req, res) => {
        const { cateSlug } = req.params;
        try {
            const editCategory = await categoryModel.findOne({ categorySlug: cateSlug });
            responseReturn(res, 200, { editCategory })
        } catch (error) {
            console.log(error.message)
        }
    }

    // category_update
    category_update = async (req, res) => {
        const { id } = req.body;
        const { state: { categoryName, categoryDes } } = req.body;
        try {

            await categoryModel.findByIdAndUpdate(id, {
                categoryName,
                categoryDes
            }, { new: true });

            responseReturn(res, 201, { message: "Category update success" })

        } catch (error) {
            console.log(error.message)
        }
    }


    // tag router start here
    add_tag_cont = async (req, res) => {
        const { tagName, tagDes } = req.body;

        const error = {};

        if (!tagName) {
            error.tagName = 'Please provide tag name';
        }
        if (!tagDes) {
            error.tagDes = 'Please provide tag description'
        }

        if (Object.keys(error).length == 0) {
            const tagSlug = tagName.trim().split(' ').join('-');
            try {
                const checkTag = await tagModel.findOne({ tagSlug });
                if (checkTag) {
                    responseReturn(res, 404, { error: "Tag already added" })
                } else {
                    await tagModel.create({
                        tagName: tagName.trim(),
                        tagSlug,
                        tagDes
                    });
                    responseReturn(res, 200, { message: "Tag add successfull" })
                }

            } catch (error) {
                responseReturn(res, 500, { error: "Internal server error" })
            }
        } else {
            responseReturn(res, 400, { error: error })
        }
    }


    // tag_get
    tag_get = async (req, res) => {
        const { searchValue, page, parPage } = req.query;
        const skipPage = parseInt(parPage) * (parseInt(page) - 1);

        try {

            if (searchValue) {
                const tags = await tagModel.find({ tagName: { $regex: searchValue, $options: 'i' } }).sort({ createdAt: -1 });
                const tagCount = await tagModel.find({}).countDocuments();
                responseReturn(res, 200, {
                    allTag: tags,
                    tagCount
                });

            } else {
                const tags = await tagModel.find({}).skip(skipPage).limit(parPage).sort({ createdAt: -1 });
                const tagCount = await tagModel.find({}).countDocuments();

                responseReturn(res, 200, {
                    allTag: tags,
                    tagCount
                });
            }

        } catch (error) {
            responseReturn(res, 400, { error: error })
        }
    }

    // tag_delete
    tag_delete = async (req, res) => {
        const { tagId } = req.params;
        try {
            await tagModel.findByIdAndDelete(tagId);
            responseReturn(res, 200, {
                message: "Tag delete success"
            });
        } catch (error) {
            responseReturn(res, 400, { error: error })
        }
    }

    // tag_edit
    tag_edit = async (req, res) => {
        const { tagSlug } = req.params;
        try {
            const editTag = await tagModel.findOne({ tagSlug: tagSlug });
            responseReturn(res, 200, { editTag })
        } catch (error) {
            console.log(error.message)
        }
    }

    // tag_update
    tag_update = async (req, res) => {
        const { id } = req.body;
        const { state: { tagName, tagDes } } = req.body;
        try {
            await tagModel.findByIdAndUpdate(id, {
                tagName,
                tagDes
            }, { new: true });

            responseReturn(res, 201, { message: "Tag update success" })

        } catch (error) {
            console.log(error.message)
        }
    }

}

module.exports = new categoryController();