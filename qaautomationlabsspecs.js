/// <reference types="cypress" />

describe("Open and Search in the site", () => {

    it("Open URL", () => {
    
    cy.visit("https://qaautomationlabs.com/");
    
    });
    
    it("Click on Read More ", () => {
    
    cy.get(".staticslider-button").click();
    
    });
    
    it("Verify Particular Blog ", () => {
    
    cy.contains("How to Setup And Run Cypress Test Cases in Google Cloud?");
    
    });
    
    it("Click on Blogs", () => {
    
    cy.contains("Blog").scrollIntoView().click({ force: true });
    
    });
    
    it("Search the data", () => {
    
    cy.get('[id="wp-block-search__input-2″]').scrollIntoView();
    
    cy.get('[id="wp-block-search__input-2″]').click({ force: true }) .type("cypress");
    
    cy.get('[id="search-icon"]').click({ force: true });
    
    cy.contains("Search Results for: cypress");
    
    });});