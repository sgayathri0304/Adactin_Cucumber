Feature: Book A Hotel In Adactin 

@Login
Scenario: User Login In The Web Appliation

Given user Launch The Adactin Application
When user Enter The User Name In User Name Field
And user Enter The Password In Password Field
Then user Click The Login Button And It Navigate To Next Page

@SearchHotel
Scenario: User Search Hotel In Adactin Hotel Search Page

When user Select The Location
And user Select Hotel
And user Select Room Type
And user Select Number Of Rooms
And user Select The Check In Date
And user Select The Check Out date
And user Select The Adults Per Room
And user Select Children Per Room
Then user Click The Search Button And It Navigate To Next Page

@SelectHotel
Scenario: User Select The Hotel 

When user Select And  Click The Hotel Type
Then user Click The Continue Button And It Navigate To Next Page

@BookHotel
Scenario: User Book A Hotel 

When user Enter The First Name In First Name Field
And user Enter The Last Name In Last Name Field
And user Enter The Billing Address In Billing Address Field
And user Enter The Credit Card Details In Credit Card Field
And User Select The Credit Card Type 
And user Select The Expiry Date
And user Select The Expiry Date
And user Enter The CVV Number In CVV Number Field
Then user Click The Book Now Button And It Navigate To Next Page

@ConfirmBooking
Scenario: User Confirm The Booking

When user Check The Given Details And Booking COnfirmation In The Page
Then user Click The My Itinerary Button It Navigate To Next Page

@CheckBooking
Scenario: User Check The Booking Confirmation In Booked Itinerary

When user Check The Booked Itinerary For The Booked Details
Then user Click The Logout Button And It Navigate To Home Page

