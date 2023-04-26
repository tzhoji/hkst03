import DirectoryItem from '../directory-item/directory-item.component';

import './directory-styles.scss';

const categories = [
    {
      id: 1001,
      title: "blouse",
      imagefile:
        "https://www.fr76radio.com/wp-content/uploads/2019/06/30555-7abacbde35f382dfbcae2d9e81b7b9f1-768x768.jpg",
      route: 'shop/blouse'
    },
    {
      id: 1002,
      title: "headset",
      imagefile:
        "https://tronicsmerch.com/wp-content/uploads/2021/01/1774-ilhton.jpg",
        route: 'shop/electronics'
    },
    {
      id: 1003,
      title: "laptop",
      imagefile: "https://i5.walmartimages.com/asr/012bbfba-813e-4753-818d-8b0159c0cac8.1e540593f4d94c78082e3ec6f8865ff9.jpeg",
      route: 'shop/computer'
    },
    {
      id: 1004,
      title: "carbonated",
      imagefile:"https://faf.company/wp-content/uploads/2021/05/colapng-768x528.png",
      route: 'shop/drink'
    },
    {
      id: 1005,
      title: "snack",
      imagefile:
        "https://www.ownyoureating.com/wp-content/uploads/2018/07/Protein-travel-snacks-thumbnail-e1532053651743.jpg",
        route: 'shop/snack'
    },
    {
      id: 1006,
      title: "shampoo",
      imagefile: "http://justbeauty-uk.s3.amazonaws.com/OSMO_DMKIT2.jpg",
      route: 'shop/shampoo'
    },
  ];


const Directory = () => {
    
  return (

    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
