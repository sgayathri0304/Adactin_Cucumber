$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Book A Hotel In Adactin",
  "description": "",
  "id": "book-a-hotel-in-adactin",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User Login In The Web Appliation",
  "description": "",
  "id": "book-a-hotel-in-adactin;user-login-in-the-web-appliation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The User Name In User Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click The Login Button And It Navigate To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 6477207400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_User_Name_In_User_Name_Field()"
});
formatter.result({
  "duration": 139747500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 74085600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigate_To_Next_Page()"
});
formatter.result({
  "duration": 1190677600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User Search Hotel In Adactin Hotel Search Page",
  "description": "",
  "id": "book-a-hotel-in-adactin;user-search-hotel-in-adactin-hotel-search-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user Select Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The Check Out date",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Click The Search Button And It Navigate To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Location()"
});
formatter.result({
  "duration": 252998400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_Hotel()"
});
formatter.result({
  "duration": 125240300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_Room_Type()"
});
formatter.result({
  "duration": 143098400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_Number_Of_Rooms()"
});
formatter.result({
  "duration": 114157300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 83700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Check_Out_date()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 106136300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_Children_Per_Room()"
});
formatter.result({
  "duration": 207246700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Search_Button_And_It_Navigate_To_Next_Page()"
});
formatter.result({
  "duration": 863860200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User Select The Hotel",
  "description": "",
  "id": "book-a-hotel-in-adactin;user-select-the-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SelectHotel"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user Select And  Click The Hotel Type",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user Click The Continue Button And It Navigate To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_And_Click_The_Hotel_Type()"
});
formatter.result({
  "duration": 64359000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Continue_Button_And_It_Navigate_To_Next_Page()"
});
formatter.result({
  "duration": 826903700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User Book A Hotel",
  "description": "",
  "id": "book-a-hotel-in-adactin;user-book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@BookHotel"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user Enter The First Name In First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Enter The Last Name In Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter The Billing Address In Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Enter The Credit Card Details In Credit Card Field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Select The Expiry Date",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Select The Expiry Date",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Enter The CVV Number In CVV Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Click The Book Now Button And It Navigate To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_First_Name_In_First_Name_Field()"
});
formatter.result({
  "duration": 90285800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Last_Name_In_Last_Name_Field()"
});
formatter.result({
  "duration": 59489700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Billing_Address_In_Billing_Address_Field()"
});
formatter.result({
  "duration": 128443500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Credit_Card_Details_In_Credit_Card_Field()"
});
formatter.result({
  "duration": 90724100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 162304400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Expiry_Date()"
});
formatter.result({
  "duration": 366031400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Expiry_Date()"
});
formatter.result({
  "duration": 357940000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_CVV_Number_In_CVV_Number_Field()"
});
formatter.result({
  "duration": 131961000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Book_Now_Button_And_It_Navigate_To_Next_Page()"
});
formatter.result({
  "duration": 79099000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "User Confirm The Booking",
  "description": "",
  "id": "book-a-hotel-in-adactin;user-confirm-the-booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@ConfirmBooking"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "user Check The Given Details And Booking COnfirmation In The Page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user Click The My Itinerary Button It Navigate To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Check_The_Given_Details_And_Booking_COnfirmation_In_The_Page()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_My_Itinerary_Button_It_Navigate_To_Next_Page()"
});
formatter.result({
  "duration": 7103219300,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "User Check The Booking Confirmation In Booked Itinerary",
  "description": "",
  "id": "book-a-hotel-in-adactin;user-check-the-booking-confirmation-in-booked-itinerary",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@CheckBooking"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user Check The Booked Itinerary For The Booked Details",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "user Click The Logout Button And It Navigate To Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Check_The_Booked_Itinerary_For_The_Booked_Details()"
});
formatter.result({
  "duration": 144600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Logout_Button_And_It_Navigate_To_Home_Page()"
});
formatter.result({
  "duration": 574459400,
  "status": "passed"
});
});