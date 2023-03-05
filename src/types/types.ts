export interface InputRegisterForm {
  name: string;
  userName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
