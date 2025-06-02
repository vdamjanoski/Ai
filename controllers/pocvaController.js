const Pocva = require("../model/pocva")

exports.createPocva = async (req, res) => {
  try {
    const newPocva = await Pocva.create(req.body);

    res.status(201).json({
      status: 'Success',
      data: {
        Pocva: newPocva,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      err: err.message,
    });
  }
};

exports.getPocvas = async (req, res) => {
    try{
        const Pocvas = await Pocva.find();

        res.status(201).json({
            status: `Success`,
            data:{
                Pocva: Pocvas
            }
        })
    } catch (err) {
        res.status(500).json({
          status: 'fail',
          err: err.message,
        });
      }
}