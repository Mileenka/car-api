import { v4 as newId } from 'uuid';

const cars = [
    {
        id: newId(),
        model: 'Porsche',
        price: 50000,
        img: 'https://pngimg.com/uploads/porsche/porsche_PNG10616.png'
    },
    {
        id: newId(),
        model: 'Tesla',
        price: 40000,
        img: 'https://i.pinimg.com/originals/ef/f2/91/eff29127abbf0d8e5e99cda29401fa7f.png'
    },
    {
        id: newId(),
        model: 'Jaguar',
        price: 70000,
        img: 'https://purepng.com/public/uploads/large/purepng.com-jaguar-f-type-carcarvehicletransportjaguar-961524666606ptsmh.png'
    },
    {
        id: newId(),
        model: 'Mercedes',
        price: 70000,
        img: 'https://pngimg.com/d/mercedes_PNG1860.png'
    },
    {
        id: newId(),
        model: 'Audi',
        price: 70000,
        img: 'https://www.motortrend.com/uploads/sites/10/2017/07/2017-audi-r8-quattro-coupe-angular-front.png?fit=around%7C875:492.1875'
    },
    {
        id: newId(),
        model: 'Nissan',
        price: 70000,
        img: 'https://pngimg.com/d/nissan_PNG52.png'
    }
];

class Car {
    constructor(model, price, img) {
        this.id = newId();
        this.model = model;
        this.price = price;
        this.img = img;
    }

    // methods

    static getCars = () => {
        return cars;
    }


    addCar = () => {
        cars.push(this);
    }
}

export default Car;