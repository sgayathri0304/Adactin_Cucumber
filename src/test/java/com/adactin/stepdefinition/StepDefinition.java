package com.adactin.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.RunnerClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

public static WebDriver driver = RunnerClass.driver;

@Given("^user Launch The Adactin Application$")
public void user_Launch_The_Adactin_Application() throws Throwable {
	driver.get("https://adactinhotelapp.com/");
}

@When("^user Enter The User Name In User Name Field$")
public void user_Enter_The_User_Name_In_User_Name_Field() throws Throwable {
	driver.findElement(By.xpath("//input[@id='username']")).sendKeys("TamilvananG");
}

@When("^user Enter The Password In Password Field$")
public void user_Enter_The_Password_In_Password_Field() throws Throwable {
	driver.findElement(By.xpath("//input[@id='password']")).sendKeys("4B2191");
}

@Then("^user Click The Login Button And It Navigate To Next Page$")
public void user_Click_The_Login_Button_And_It_Navigate_To_Next_Page() throws Throwable {
	driver.findElement(By.xpath("//input[@id='login']")).click();
}

@When("^user Select The Location$")
public void user_Select_The_Location() throws Throwable {
	WebElement location = driver.findElement(By.xpath("//select[@id='location']"));
	Select s=new Select(location);
	s.selectByIndex(4);
}

@When("^user Select Hotel$")
public void user_Select_Hotel() throws Throwable {
	WebElement hotels = driver.findElement(By.xpath("//select[@id='hotels']"));
	Select s1=new Select(hotels);
	s1.selectByValue("Hotel Sunshine");
}

@When("^user Select Room Type$")
public void user_Select_Room_Type() throws Throwable {
	WebElement roomtype = driver.findElement(By.xpath("//select[@id='room_type']"));
	Select s2=new Select(roomtype);
	s2.selectByVisibleText("Super Deluxe");
}

@When("^user Select Number Of Rooms$")
public void user_Select_Number_Of_Rooms() throws Throwable {
	WebElement no_ofrooms = driver.findElement(By.xpath("//select[@id='room_nos']"));
	Select s3=new Select(no_ofrooms);
	s3.selectByIndex(1);
}

@When("^user Select The Check In Date$")
public void user_Select_The_Check_In_Date() throws Throwable {

}

@When("^user Select The Check Out date$")
public void user_Select_The_Check_Out_date() throws Throwable {

}

@When("^user Select The Adults Per Room$")
public void user_Select_The_Adults_Per_Room() throws Throwable {
	WebElement adults = driver.findElement(By.xpath("//select[@id='adult_room']"));
	Select s4=new Select(adults);
	s4.selectByVisibleText("2 - Two");
}

@When("^user Select Children Per Room$")
public void user_Select_Children_Per_Room() throws Throwable {
	WebElement childs = driver.findElement(By.xpath("//select[@id='child_room']"));
	Select s5=new Select(childs);
	s5.selectByIndex(2);
}

@Then("^user Click The Search Button And It Navigate To Next Page$")
public void user_Click_The_Search_Button_And_It_Navigate_To_Next_Page() throws Throwable {
	driver.findElement(By.xpath("//input[@id='Submit']")).click();
}

@When("^user Select And  Click The Hotel Type$")
public void user_Select_And_Click_The_Hotel_Type() throws Throwable {
	driver.findElement(By.xpath("//input[@id='radiobutton_0']")).click();//     //input[@id='radiobutton_0']
}

@Then("^user Click The Continue Button And It Navigate To Next Page$")
public void user_Click_The_Continue_Button_And_It_Navigate_To_Next_Page() throws Throwable {
	driver.findElement(By.xpath("//input[@id='continue']")).click();
}

@When("^user Enter The First Name In First Name Field$")
public void user_Enter_The_First_Name_In_First_Name_Field() throws Throwable {
	driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys("Rajini");
}

@When("^user Enter The Last Name In Last Name Field$")
public void user_Enter_The_Last_Name_In_Last_Name_Field() throws Throwable {
	driver.findElement(By.xpath("//input[@id='last_name']")).sendKeys("Kanth");
}

@When("^user Enter The Billing Address In Billing Address Field$")
public void user_Enter_The_Billing_Address_In_Billing_Address_Field() throws Throwable {
	driver.findElement(By.xpath("//textarea[@id='address']")).sendKeys("No.108, Dubai kuruku sandhu, Dubai Main road, Dubai");
}

@When("^user Enter The Credit Card Details In Credit Card Field$")
public void user_Enter_The_Credit_Card_Details_In_Credit_Card_Field() throws Throwable {
	driver.findElement(By.xpath("//input[@id='cc_num']")).sendKeys("1234 5678 1234 5678");
}

@When("^User Select The Credit Card Type$")
public void user_Select_The_Credit_Card_Type() throws Throwable {
	WebElement cctype = driver.findElement(By.xpath("//select[@id='cc_type']"));
	Select c=new Select(cctype);
	c.selectByIndex(1);
}

@When("^user Select The Expiry Date$")
public void user_Select_The_Expiry_Date() throws Throwable {
	WebElement ccmonth = driver.findElement(By.xpath("//select[@id='cc_exp_month']"));
	Select cc=new Select(ccmonth);
	cc.selectByIndex(4);
	
	WebElement ccyear = driver.findElement(By.xpath("//select[@id='cc_exp_year']"));
	Select cc1=new Select(ccyear);
	cc1.selectByValue("2030");
}

@When("^user Enter The CVV Number In CVV Number Field$")
public void user_Enter_The_CVV_Number_In_CVV_Number_Field() throws Throwable {
	driver.findElement(By.xpath("//input[@id='cc_cvv']")).sendKeys("123");
}

@Then("^user Click The Book Now Button And It Navigate To Next Page$")
public void user_Click_The_Book_Now_Button_And_It_Navigate_To_Next_Page() throws Throwable {
	driver.findElement(By.xpath("//input[@id='book_now']")).click();
}

@When("^user Check The Given Details And Booking COnfirmation In The Page$")
public void user_Check_The_Given_Details_And_Booking_COnfirmation_In_The_Page() throws Throwable {

}

@Then("^user Click The My Itinerary Button It Navigate To Next Page$")
public void user_Click_The_My_Itinerary_Button_It_Navigate_To_Next_Page() throws Throwable {
	driver.findElement(By.xpath("//input[@id='my_itinerary']")).click();
}

@When("^user Check The Booked Itinerary For The Booked Details$")
public void user_Check_The_Booked_Itinerary_For_The_Booked_Details() throws Throwable {

}

@Then("^user Click The Logout Button And It Navigate To Home Page$")
public void user_Click_The_Logout_Button_And_It_Navigate_To_Home_Page() throws Throwable {
	driver.findElement(By.xpath("//input[@id='logout']")).click();
}


}
