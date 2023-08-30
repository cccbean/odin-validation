# odin-validation
As per Odin Project, I created a basic form with fields for email, country, zip code, password, and confirm password and validation for each field. I didn't bother with too much styling in CSS since the main goal was the form validation.

Email validation:
1. valueMissing
2. typeMismatch

Country validation:
1. None since it was a select field with a default selection

Zip Code validation:
1. valueMissing
2. patternMismatch (5 digits)

Password validation:
1. valueMissing
2. patternMismatch (at least one uppercase, one lowercase, one number, and one special character)

Confirm password validation:
1. valueMissing
2. confirm password value matches password value