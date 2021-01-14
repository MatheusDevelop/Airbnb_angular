export default class reservationRequest{

  public User:Object = {};
  public Furniture:Object = {};
  public Payment:Object = {};
  public Checkin:Date;
  public Checkout:Date;

  constructor(user:Object,furniture:Object,payment:Object,checkin:Date,checkout:Date)
  {
    this.User = user;
    this.Furniture = furniture;
    this.Payment = payment;
    this.Checkout = checkout;
    this.Checkin = checkin;
  }

}
