# 3Bodypage detail and photo service

> This module will display business detail and photo information

## Related Projects

  - Proxy: https://github.com/3-body-problem/CL_yelp_proxy

## Demo

![3BodyDemo](public/3bodydemo.gif)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Please run the following scripts to start this service:
1. `npm install`: Install all required dependencies
2. `npm run seed` : Insert 400 mock items into database (business, photo)
3. `npm run unseed`: Remove all items from database
4. `npm test:desc`: Run all tests with descriptions

## API Endpoint

### 1. for business info display

**URL:** /biz/:bId

**Description:** This example retrieves current business detail of the specific business page with first 3 photos

**API Response:**
```
  {
    bId: 1,
    bizname: 'Taste of Texas',
    reviewCount: 1380,
    rating: 4.5,
    price: '$$$',
    category: ['Steakhouses', 'Wine Bars'],
    location: {
      address1: '10505 Katy Fwy',
      address2: 'Ste 2',
      city: 'Houston',
      state: 'TX',
      zipcode: '77024',
      neighborhood: 'Memorial',
      latitude: 29.7827412984213,
      longitude: -95.556758998672,
    },
    phone: '(713) 932-6901',
    url: 'tasteoftexas.com',
    photos: [
      1, 2, 3,
    ],
  }
```
### 2. for photo display

**URL:** /biz_photos/:bId/:pId

**Description:** This example retrieves 10 photo objects of current business on the business page with it’s related business Id.

**API Response:**
```
[
  {
    pId: 1,
    imgUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/J3kWrFK9vE5oBgREBJ1YQg/ls.jpg',
    uId: 1,
    bId: 1,
    text: '38oz!!!!!',
    tag: 'Tomahawk Ribeye',
  },
  photo2_obj,
  photo3_obj,
  ...,photo10_obj
]
```
### 3. for individual photo request

**URL:** /biz_photo/:bId/:pId

**Description:** This example retrieves one photo for current business on the business page with it’s related bId

**API Response:**

 ```
 {
    pId: 1,
    imgUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/J3kWrFK9vE5oBgREBJ1YQg/ls.jpg',
    uId: 1,
    bId: 1,
    text: '38oz!!!!!',
    tag: 'Tomahawk Ribeye',
  }
```
### 4. for popular dishes

**URL:** /biz_dishes/:bId/:dishes

**Description:**  This example retrieves the first photo and total photo counts in relation to menu item.

**API Response:**
```
[
    {
        "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/J3kWrFK9vE5oBgREBJ1YQg/ls.jpg",
        "photoCount": 1,
        "dish": "Tomahawk Ribeye"
    },
    {
        "imgUrl": "https://s3-media3.fl.yelpcdn.com/bphoto/L38qQjyzPvt53aJ5sTj4sg/ls.jpg",
        "photoCount": 1,
        "dish": "Center Cut Filet"
    }
]
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

