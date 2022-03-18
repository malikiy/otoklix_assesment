const catchAsync = require('../util/catchAsync');
const AppError = require('../util/errorHandler');

exports.createOne = Model => catchAsync(async (req, res, next)=>{
  const date = new Date();
  date.setHours(date.getHours() +7);
  req.body.published_at = date;
  req.body.created_at = date;

  const doc = await Model.create({
      data: req.body
  });

  res.status(201).json({
    status : 'success',
    data: doc
  });
});

exports.getOne = (Model, popOptions) =>catchAsync(async (req, res, next)=>{
  let query = Model.findUnique({
    where: {
        id: parseInt(req.params.id)
      }
  });
      const doc = await query;
  if(!doc){
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
      status: 'success',
      data: doc  
  });
});

exports.getAll = (Model, popOptions) => catchAsync(async (req, res, next)=>{
  const data = await Model.findMany();
  res.status(200).json({
    status: 'success',
    totalCount: data.length,
    data
  });
});

exports.updateOne = Model => catchAsync(async (req, res, next)=>{
  const date = new Date();
  date.setHours(date.getHours() +7);
  req.body.updated_at = date;
  const condition = {id: parseInt(req.params.id )}
  const doc = await Model.update({
    where: condition,
    data: req.body
  })
  if(!doc){
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data : doc
  });
});

exports.deleteOne = Model => catchAsync(async (req, res, next)=>{
    const condition = {id: parseInt(req.params.id)}
    const doc = Model.delete({
        where: condition
      })
  if(!doc){
    return next(new AppError('No document found with that ID', 404));
  }else{
    res.status(200).json({
      status: 'delete success',
    });
  }
 
});