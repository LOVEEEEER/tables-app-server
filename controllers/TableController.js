import TableModel from "../models/Table.js";

export const getAll = async (req, res) => {
  try {
    const table = await TableModel.find();

    res.json(table);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить таблицы",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new TableModel({
      name: req.body.name,
      amount: req.body.amount,
      distance: req.body.distance,
    });

    const table = await doc.save();

    res.json(table);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать статью",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const tableId = req.params.id;

    TableModel.findOneAndDelete(
      {
        _id: tableId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить таблицу",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Таблица не найдена",
          });
        }

        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить таблицы",
    });
  }
};
