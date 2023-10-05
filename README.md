 # Mimosa

## Overview
Welcome to Mimosa Beauty Salon and Spa, your go-to destination for all things beauty and relaxation. This full-stack website allows users to explore various beauty packages and conveniently book their preferred services. In addition, the admin has the power to manage both users and beauty packages efficiently.

## Technologies
Mimosa Beauty Salon and Spa is built using a range of modern technologies to ensure a seamless user experience:

- Node.js
- Express.js
- Mongoose
- TypeScript


## Features
1. Users can browse a variety of beauty packages.
2. Users have the option to book any beauty package they desire.
3. Users can easily manage their booked packages.
4. Admins have the authority to manage users.
5. Admins can also manage beauty packages.

## Models
Mimosa Beauty Salon and Spa utilizes the following models to organize and store data:

1. ## User
| Field | Type |
|-------|------|
| Name | String |
| Email| String | 
| Password| String | 
| PhotoUrl| String | 
| Address| String | 
| Phone Number| String | 
| Role| Enum[user, admin] | 
| Bookings| Booking[] | 

3. ## BeautyPackage
| Field | Type |
|-------|------|
| Title | String |
| Description | String |
| Category| String |
| Images| String[] |
| Price| Number |
| Specialists| Specialist[] |
| Bookings| Booking[] |

5. ## Specialist
| Field | Type |
|-------|------|
| Name | String |
| Designation | String |
| Bio | String |
| Photo URL | String |
| Date of Birth URL | String |
| BeautyPackages | BeautyPackage[] |

7. ## Booking
 | Field | Type |
 |-------|------|
 | User | User{} |
 | BeautyPackages | BeautyPackage[] |

## API Routes
The following API routes are available for Mimosa Beauty Salon and Spa:

| SL No. | HTTP Verb | Endpoint                             | Description             | Permission  |
|--------|-----------|-------------------------------------|-------------------------|-------------|
| 1      | POST      | /api/auth/register                   | Register a user          | All         |
| 2      | POST      | /api/auth/login                      | Login user               | All         |
| 3      | GET       | /api/users                           | Get all users            | Admin       |
| 4      | GET       | /api/users/{userId}                  | Get a user               | User/Admin  |
| 5      | DELETE    | /api/users/{userId}                  | Delete a user            | User/Admin  |
| 6      | PUT       | /api/users/{userId}                  | Update a user            | User/Admin  |
| 7      | GET       | /api/beauty_packages                  | Get all beauty packages  | All         |
| 8      | GET       | /api/beauty_packages/{beautyPackageId}| Get a beauty package    | All         |
| 9      | POST      | /api/beauty_packages                  | Create a beauty package | Admin       |
| 10     | PUT       | /api/beauty_packages/{beautyPackageId}| Update a beauty package | Admin       |
| 11     | DELETE    | /api/beauty_packages/{beautyPackageId}| Delete a beauty package | Admin       |
| 12     | GET       | /api/specialists                      | Get all specialists      | All         |
| 13     | GET       | /api/specialists/{specialistId}       | Get a specialist         | All         |
| 14     | POST      | /api/specialists                      | Create a specialist      | Admin       |
| 15     | PUT       | /api/specialists/{specialistId}       | Update a specialist      | Admin       |
| 16     | DELETE    | /api/specialists/{specialistId}       | Delete a specialist      | Admin       |
| 17     | POST      | /api/bookings/create/{beautyPackageId} | Create a booking         | User        |
| 18     | GET       | /api/bookings                         | Get all bookings         | Admin       |
| 19     | DELETE    | /api/bookings/{bookingId}             | Delete a booking         | User        |

## Installation
1. Clone this repository.
2. Create an .env file with the following variables:
 - MONGO_URI (Your MongoDB connection URI)
 - JWT_SECRET (A secret key for JWT token generation)
3. Run yarn to install project dependencies.
4. Start the development server with yarn dev.


## Conclusion
Mimosa Beauty Salon and Spa is committed to providing you with the best beauty and relaxation experience. Whether you're a user looking to pamper yourself or an admin managing our services, our platform is designed to cater to your needs. Thank you for choosing Mimosa, where beauty meets luxury and comfort.
