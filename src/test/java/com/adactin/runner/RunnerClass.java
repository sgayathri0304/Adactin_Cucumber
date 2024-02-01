package com.adactin.runner;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//feature", 
glue = "com.adactin.stepdefinition",
monochrome = true,
dryRun = false,
strict = true,
tags = ("@Login,@SearchHotel,@SelectHotel,@BookHotel,@ConfirmBooking,@CheckBooking"),
plugin = {"html:Reports/Html_Reports",
		"pretty",
		"json:Reports/json_Report.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/Extend_Report.html"
})

public class RunnerClass {

	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\tsent\\eclipse-workspace\\tamil\\AdactinCucumber\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	
	}
	
	@AfterClass
	public static void tearDown() {
		driver.close();
	}
	
}
