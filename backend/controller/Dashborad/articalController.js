
const { responseReturn } = require('../../utiles/response');
const formidable = require('formidable');
const validator = require('validator');
const cloudinary = require('cloudinary').v2
const articleModel = require('../../models/articleModel');



class articalController {

    // add_artical
    add_artical = async (req, res) => {
        const { adminId, adminName } = req;

        const form = formidable()
        form.parse(req, async (err, fields, fiels) => {
            if (err) {
                responseReturn(res, 404, { error: "Something error" })
            } else {
                const { title, category, tag, slug, text } = fields;
                const { image } = fiels;

                if (!title || !category || !tag || !slug || !text || !image) {
                    responseReturn(res, 400, { error: "All field is required" })
                } else {
                    cloudinary.config({
                        cloud_name: process.env.cloud_name,
                        api_key: process.env.api_key,
                        api_secret: process.env.api_secret,
                        secure: true
                    });

                    try {
                        const result = await cloudinary.uploader.upload(image.filepath, { folder: "articalImg" });

                        const categoryName = category.split('-').join(' ');
                        const tagName = tag.split('-').join(' ');

                        await articleModel.create({
                            adminId,
                            adminName,
                            title,
                            slug,
                            category: categoryName,
                            category_slug: category,
                            tag: tagName,
                            tag_slug: tag,
                            articleText: text,
                            image: result.url
                        });
                        responseReturn(res, 201, { message: 'Article add successfull' })

                    } catch (error) {
                        responseReturn(res, 500, { error: error.message })
                    }

                }

            }
        })

        try {


        } catch (error) {

        }
    }

}

module.exports = new articalController();