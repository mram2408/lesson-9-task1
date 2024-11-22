class ProductValidator {
  static productSchema = {
    name: {
      escape: true,
      notEmpty: {
        errorMessage: "Назва не може бути пустою",
      },
    },
    price: {
      escape: true,
      notEmpty: {
        errorMessage: "Ціна не може бути пустою",
      },
      isInt: {
        options: { min: 0 },
        errorMessage: "Ціна повинна бути більше 0",
      },
    },
    quantity: {
      escape: true,
      notEmpty: {
        errorMessage: "Кількість не може бути пустою",
      },
      isInt: {
        options: { min: 0 },
        errorMessage: "Кількість не може бути менше за 0",
      },
    },
  };
}

export default ProductValidator;
