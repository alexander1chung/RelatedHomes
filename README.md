# RelatedHomes API
**Show Related Houses**
----
  Returns related homes

* **URL**
  /houses/:houseId/relatedhomes

* **Method:**
  `GET`
  
*  **URL Params**

   **Required:**
   `houseId=[integer]`

* **Data Params**
  None

* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{ relatedhomes: [{"houseId":22, "_id":"5e83e0da553d10816cb3a100", "photoSrc":"https://relaxly-photos.s3-us-west-1.amazonaws.com/cabane_lalegende.jpg", location:"California 94015","beds":"Private Room - 3 bed(s)","rating":"3.95 (3604)","description":"Perfect Suburban Ecolodge","pricePerNight":"$519.00","__v":0 }, ...]}`
 
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "House does not exist" }`
    
  OR
  
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    axios.get('/houses/1/relatedhomes');
  ```
  
**Make a New House**
----
  make a new house

* **URL**
  /houses/

* **Method:**
  `POST`
  
*  **URL Params**
  
   **Required:**


* **Body Params** 
`body = { photoSrc: string, beds: string, location: string, rating: string, description:string pricePerNight: string }`

* **Success Response:**
  * **Code:** 201 <br />
    **Content:** `{ success: 'Successfully created a house!'}`
 
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "House was not made" }`
    
  OR
  
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    axios.post('/houses/', body); // creates a house based off of body 
  ```

**Update House**
----
  Updates house

* **URL**
  /houses/:houseId/

* **Method:**
  `PUT`
  
*  **URL Params**

   **Required:**
   `houseId=[integer]`,
   
* **Data Params**
* **Body Params** `any of the properties in a house`
  
* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{ success: 'Successfully updated house!'}`
 
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "house doesn't exist" }`
    
  OR
  
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    axios.put('/houses/1/', { photoSrc: ..., rating: ..., description: ..., pricePerNight: ...}); // udpates theses properties because they exist
    axios.put('/houses/1/', { photoSrc: ..., rating: ..., fakedescription: ... }); // updates everything except for fakedescription because fakedescription doesn't exist
  ```
  
**Delete House**
----
  Deletes house

* **URL**
  /houses/:houseId/

* **Method:**
  `DELETE`
  
*  **URL Params**

   **Required:**
   `id=[integer]`

* **Data Params**
  None

* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{ success: 'Successfully deleted house!'}`
 
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "House doesn't exist" }`
    
  OR
  
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    axios.delete('/houses/1/');
  ```

