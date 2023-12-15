const addtool = require("../model/Addtool");

const Addtools = async (req, res) => {
  //toolName,
  // toolLogo,
  // screenshot,
  //toolTags,
  // toolDescription,
  // toolLink,
  const {
    toolName,
    toolLogo,
    screenshot,
    toolTags,
    toolTag,
    toolDescription,
    toolLink,
  } = req.body;
 
console.log('===',req.body)

  try {
    const newadd = await addtool.create({
      name: toolName,
      tags: toolTags.split(',').map(tag => tag.trim()),
      tag: toolTag.split(',').map(tag => tag.trim()),
      logo: toolLogo,
      screenshot: screenshot,
      description: toolDescription,
      link: toolLink,
    });
    res.status(201).json(newadd);
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
};

const getalltool = async (req, res) => {
  const data = await addtool.find({});
  res.json({ data: data });
};

const getatool = async (req, res) => {
  try{
    const { id } = req.params;
    const tool = await addtool.findById(id);
      
          if (!tool) {
            return res.status(404).json({ error: 'Blog post not found' });
          }
      
          res.json({ data: tool });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

const deletetool = async (req, res) => {
  try {
    console.log("^^^^^^^^^^^", req.body.id);
    const remove = await addtool.deleteOne({ _id: req.body.id });
    res.send("200");
  } catch (error) {
    res.send(error);
  }
};

const editTool = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTool = await addtool.findByIdAndUpdate(
      id,
      {
        $set: {
          name: req.body.toolName,
          tags: req.body.toolTags.split(',').map(tag => tag.trim()),
          tag: req.body.toolTag.split(',').map(tag => tag.trim()),
          logo: req.body.toolLogo,
          screenshot: req.body.screenshot,
          description: req.body.toolDescription,
          link: req.body.toolLink,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedTool);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: 'error', data: error });
  }
};

module.exports = { Addtools, getalltool, deletetool, getatool,editTool };
