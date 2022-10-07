import { SectionWrapper } from "../../layout/SectionWrapper"
import { Button } from "../../elements/Button"

export default function PaymentForm() {
  return (
    <>
      <SectionWrapper color="SECONDARY_CREAM" padding="hero" maxWidth={728} className="mx-auto">
        <h2 className="primary-berry text-center my-4">Bee a Supporter</h2>
        <div className="my-4 d-flex justify-content-center">
          <div className="mx-3">
            <input
              className="h4"
              type="radio"
              id="amount-one-time"
              value="amount-one-tim"
              name="donation-frequency"
            />
            <label className="h4 primary-berry" htmlFor="amount-one-time">
              One Time
            </label>
          </div>
          <div className="mx-3">
            <input
              className="h4"
              type="radio"
              id="amount-monthly"
              value="amount-monthly"
              name="donation-frequency"
            />
            <label className="h4 primary-berry" htmlFor="amount-monthly">
              Monthly
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Button variant="secondary_lightBG" title="200 kr" />
          <Button variant="secondary_lightBG" title="500 kr" />
          <Button variant="secondary_lightBG" title="1000 kr" />
          <Button variant="secondary_lightBG" title="Other Kr" />
        </div>
      </SectionWrapper>
      <SectionWrapper padding="hero">
        <form>
          <h3>Personal Information</h3>

          <div className="form-group">
            <label htmlFor="FirstName">First Name</label>
            <input id="FirstName" className="form-control" type="text"></input>
          </div>
          <div className="form-group">
            <label htmlFor="LastName">Last Name</label>
            <input id="LastName" className="form-control" type="text"></input>
          </div>
          <div className="form-group">
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input id="PhoneNumber" className="form-control" type="text"></input>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email Address</label>
            <input id="Email" className="form-control" type="text"></input>
          </div>
          <h3>Payment Information</h3>

          <div className="form-group">
            <label htmlFor="CreditCardNumber">Card Number</label>
            <input
              id="CreditCardNumber"
              className="null card-image form-control"
              type="text"
            ></input>
          </div>
          <div className="expiry-date-group form-group">
            <label htmlFor="ExpiryDate">Expiration date</label>
            <input
              id="ExpiryDate"
              className="form-control"
              type="text"
              placeholder="MM / YY"
            ></input>
          </div>
          <div className="security-code-group form-group">
            <label htmlFor="SecurityCode">CVV</label>
            <div className="input-container">
              <input id="SecurityCode" className="form-control" type="text"></input>
            </div>
          </div>
          <div className="country-code-group form-group">
            <label htmlFor="CountryCode">Country</label>
            <div className="input-container">
              <input id="CountryCode" className="form-control" type="text"></input>
            </div>
          </div>
          <Button type="submit" variant="primary_darkBG" title="Submit Donation" />
        </form>
      </SectionWrapper>
    </>
  )
}
