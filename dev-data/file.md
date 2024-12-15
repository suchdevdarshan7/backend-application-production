### MongoDB Schema Design for a Vendor-Customer Platform

This document outlines the schema for creating a MongoDB database for a platform that facilitates interactions between vendors and customers. The database comprises four main collections: users, vendors, inquiries, and requirements. Each collection's structure is detailed below.

---

#### _Collection: users_

_Purpose_: Stores information about all platform users, both vendors and customers.

_Fields_:

- **name**: string

  - Required, not null.
  - Stores the full name of the user.

- **email**: string

  - Required, unique, not null.
  - Stores the user's email address.

- **password**: string

  - Required, not null.
  - Stores the hashed password for authentication.

- **phone**: string

  - Optional, unique.
  - Stores the user's phone number.

- **role**: string

  - Required, not null.
  - Specifies whether the user is a vendor or customer.

- **location**: string

  - Optional.
  - Stores the user's location details.

- **verified**: boolean

  - Default: false.
  - Indicates whether the user's account is verified.

- **profile_image**: string

  - Optional.
  - Stores the path or URL to the user's profile image. Defaults to empty if not provided.

- **created_at**: date

  - Auto-generated, not null.
  - Timestamp when the user record was created.

- **updated_at**: date
  - Auto-generated, not null.
  - Timestamp when the user record was last updated.

---

#### _Collection: vendors_

_Purpose_: Stores vendor-specific details linked to the users collection.

_Fields_:

- **user_id**: ObjectId

  - Required, unique.
  - References the corresponding user's \_id in the users collection.

- **categories**: Array of objects containing:

  - **category_name**: string

    - Required, not null.
    - Represents the name of the category (e.g., Photography, Catering).

  - **sub_services**: Array of objects containing:

    - **sub_service_name**: string

      - Required, not null.
      - Represents the name of the sub-service.

    - **type**: string

      - Required, not null.
      - Specifies whether the sub-service uses a radio or checkbox selection type.

    - **packages**: Object containing:

      - **basic**: Object with:

        - **price**: number (Required, not null).
        - **includes**: string (Required, not null).

      - **standard**: Object with:

        - **price**: number (Optional).
        - **includes**: string (Optional).

      - **premium**: Object with:

        - **price**: number (Optional).
        - **includes**: string (Optional).

      - **description**: string (Optional).
      - **images**: Array of string (Optional).
        - Stores URLs or paths to package images.
      - **published**: boolean
        - Default: false.
        - Indicates if the package is published and visible to customers.

- **about**: string

  - Optional.
  - Brief description about the vendor.

- **location**: string

  - Optional.
  - Stores the vendor's location details.

- **verified**: boolean

  - Default: false.
  - Indicates whether the vendor's account is verified.

- **work_proof**: Array of objects containing:

  - **type**: string
    - Required.
    - Specifies the proof type (e.g., google_business, website, social_media).
  - **link**: string
    - Required.
    - URL to the proof resource.

- **reviews**: Object containing:

  - **total_reviews**: number
    - Default: 0.
    - Total number of reviews.
  - **avg_rating**: number
    - Default: 0.0.
    - Average rating score.
  - **stars**: Object with star ratings:
    - **5**, **4**, **3**, **2**, **1**: number
      - Default: 0 for each.

- **availability**: Object containing:

  - **unavailable_dates**: Array of date (Optional).
    - List of dates the vendor is unavailable.

- **created_at**: date

  - Auto-generated, not null.
  - Timestamp when the vendor record was created.

- **updated_at**: date
  - Auto-generated, not null.
  - Timestamp when the vendor record was last updated.

---

#### _Collection: inquiries_

_Purpose_: Stores customer inquiries directed to vendors.

_Fields_:

- **customer_id**: ObjectId

  - Required.
  - References the \_id of the user making the inquiry.

- **vendor_id**: ObjectId

  - Required.
  - References the \_id of the vendor.

- **category_name**: string

  - Required, not null.
  - Represents the category of service (e.g., Catering).

- **sub_service_name**: string

  - Required, not null.
  - Represents the sub-service being inquired about.

- **event_date**: date

  - Required, not null.
  - Date of the event.

- **event_location**: string

  - Required, not null.
  - Location of the event.

- **custom_message**: string

  - Optional.
  - Custom message from the customer.

- **inquiry_type**: string

  - Required, not null.
  - Specifies the type of inquiry (call or form).

- **created_at**: date

  - Auto-generated, not null.
  - Timestamp when the inquiry was created.

- **updated_at**: date
  - Auto-generated, not null.
  - Timestamp when the inquiry was last updated.

---

#### _Collection: requirements_

_Purpose_: Stores customer requirements for vendors to propose services.

_Fields_:

- **customer_id**: ObjectId

  - Required.
  - References the \_id of the user submitting the requirement.

- **category_name**: string

  - Required, not null.
  - Represents the category of service (e.g., Photography).

- **sub_service_name**: string

  - Required, not null.
  - Represents the sub-service being required.

- **event_date**: date

  - Required, not null.
  - Date of the event.

- **event_location**: string

  - Required, not null.
  - Location of the event.

- **budget**: number

  - Optional.
  - Proposed budget for the service.

- **custom_description**: string

  - Optional.
  - Detailed description of the requirement.

- **proposals**: Array of objects containing:

  - **vendor_id**: ObjectId
    - Required.
    - References the \_id of the vendor submitting the proposal.
  - **quotation**: number
    - Required, not null.
    - Proposed cost for the service.
  - **portfolio**: Array of string (Optional).
    - URLs or paths to portfolio items.
  - **custom_message**: string (Optional).
  - **submitted_at**: date
    - Auto-generated, not null.

- **created_at**: date

  - Auto-generated, not null.
  - Timestamp when the requirement was created.

- **updated_at**: date
  - Auto-generated, not null.
  - Timestamp when the requirement was last updated.
