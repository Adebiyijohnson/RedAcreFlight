export class dashboard {
    searchairpotDepart() {
        return cy.contains("Search airport");
    }
    ViennaInt() {
        return cy.contains("Vienna International")
    };
    BookNow() {
        return cy.contains("Book Now");
    }
    DepartFrom() {
        return cy.contains("Departing from");
    }
    flyingto() {
        return cy.contains("Flying to");
    }
    searchairportReturn() {
        return cy.contains("Search airport")
    }
    MaltaInt() {
        return cy.contains("Malta International Airport");
    }
    departureDate1() {
        return cy.get('.startDate > .form-control');
    }
    returnDate2() {
        return cy.get('.endDate > .form-control')
        }
    findFlight() {
        return cy.contains("Find flights");
    }
    calendarDay() {
        return cy.get(".calendar-day");
    }
    OutboundFlight() {
        return cy.contains("Outbound Flight");
    }
    yourCart() {
        return cy.contains("Your Cart");
    }
    search2() {
        return cy.contains("Search");
    }
    KeyboardArrowDown() {
        return cy.contains("keyboard_arrow_up")
    }
    Golight() {
        return cy.contains("Go Light")
    }
    select() {
        return cy.contains("Select")
    }
    selected() {
        return cy.contains("Selected");
    }
    totalPrice() {
        return cy.contains("Total")
    }
    continue() {
        return cy.contains("Continue")
    }
    inboundFlight() {
        return cy.contains("Inbound Flight");
    }
    modifySearch() {
        return cy.get("[class=sc-hRDjdK hSSEzA]");
    }
    businessAmount() {
        return cy.contains("€ 356.92")
    }
    GoSmart() {
        return cy.contains("Go Smart");
    }
    GoFlex() {
        return cy.contains("Go Flex");
    }
    JustBusiness() {
        return cy.contains("Just Business")
    }
    selectExtras() {
        return cy.contains("Select Extras");
    }
    Date4() {
        return cy.get(':nth-child(1) > .DayPicker-Body > :nth-child(1) > .DayPicker-Day--mondays');

    }
    Date12() {
        return cy.get('[aria-label="Mon Dec 12 2022"] > .date-picker-day-cell > .calendar-day');
    }

}