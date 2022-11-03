import { dashboard } from "../support/page_object/page_object";
const DashboardView = new dashboard

describe('FlightBooking', () => {
  it('visit website', () => {
    cy.visit('https://airmalta.com/en');
    expect(true).to.equal(true)
    //DashboardView.BookNow().should('be.visible');
    DashboardView.DepartFrom().should('be.visible');
    DashboardView.flyingto().should('be.visible')
    DashboardView.searchairpotDepart().click();
    DashboardView.ViennaInt().click();
    DashboardView.searchairportReturn().last().click();
    DashboardView.MaltaInt().click();
    DashboardView.departureDate1().click({ force: true });
    DashboardView.calendarDay().should("be.visible");
    DashboardView.Date4().click({ force: true });
    DashboardView.returnDate2().click({ force: true });
    DashboardView.Date12().click({ force: true });
  //   DashboardView.findFlight().click({ force: true });
  //   //next page (choose flight)
  //   DashboardView.OutboundFlight().should("be.visible");
  //   DashboardView.modifySearch().should("be.visible");
  //   DashboardView.yourCart().should("be.visible");
  //   DashboardView.GoSmart().should("be.visible")
  //   DashboardView.GoFlex().should("be.visible");
  //   DashboardView.KeyboardArrowDown().should("be.visible").click();
  //   DashboardView.Golight().should("be.visible");
  //   DashboardView.select().first().click();
  //   DashboardView.continue().click();
  //   //Next page(complete process)
  //   DashboardView.inboundFlight().should("be.visible");
  //   DashboardView.modifySearch().should("be.visible")
  //   DashboardView.yourCart().should("be.visible");
  //   DashboardView.GoSmart().should("be.visible")
  //   DashboardView.GoFlex().should("be.visible");
  //   DashboardView.KeyboardArrowDown().click()
  //   DashboardView.select().first().click()
  //   DashboardView.selected().should("be.visible");
  //   DashboardView.continue().click();
  //   //next page (checkout)
  //   DashboardView.selectExtras().should("be.visible") 

    })

});




