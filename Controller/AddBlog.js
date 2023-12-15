const addBlog = require("../model/AddBlog");

const AddBlogs = async (req, res) => {
  //BlogName,
  // BlogLogo,
  // screenshot,
  //BlogTags,
  // BlogDescription,
  // BlogLink,
  const {
    BlogName,
   
    screenshot,

    BlogDescription,

  } = req.body;
 
console.log('===',req.body)

  try {
    const newadd = await addBlog.create({
      name: BlogName,
      screenshot: screenshot,
      description: BlogDescription.split('/n').map(tag => tag.trim()),
    });
    res.status(201).json(newadd);
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
};

const getallBlog = async (req, res) => {
  const data = await addBlog.find({});
  res.json({ data: data });
};

const getablog = async (req, res) => {
  try{
  const { id } = req.params;
  const blogPost = await addBlog.findById(id);
    
        if (!blogPost) {
          return res.status(404).json({ error: 'Blog post not found' });
        }
    
        res.json({ data: blogPost });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

const deleteBlog = async (req, res) => {
  try {
    console.log("^^^^^^^^^^^", req.body.id);
    const remove = await addBlog.deleteOne({ _id: req.body.id });
    res.send("200");
  } catch (error) {
    res.send(error);
  }
};

const getblogIndi = async (req, res) => {
    try {
        const { id } = req.params;
    
        const blogPost = await addBlog.findById(id);
    
        if (!blogPost) {
          return res.status(404).json({ error: 'Blog post not found' });
        }
    
        res.json({ data: blogPost });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    const editBlog = async (req, res) => {
      const { id } = req.params;
    
      try {
        const updatedBlog = await addBlog.findByIdAndUpdate(
          id,
          {
            $set: {
              name: req.body.BlogName,
              screenshot: req.body.screenshot,
              description: req.body.BlogDescription.split('/n').map(tag => tag.trim()),
            },
          },
          { new: true }
        );
    
        res.status(200).json(updatedBlog);
      } catch (error) {
        console.error(error);
        res.status(500).json({ Status: 'error', data: error });
      }
    }; 

module.exports = { AddBlogs, getallBlog, deleteBlog, getblogIndi, getablog, editBlog };
