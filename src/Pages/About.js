import React, { Component } from "react";

class About extends Component {
render() {
  return (
    <div className="About">
      <h1><span>About Budget Buddy</span></h1>
	<h2><span>Want to budget without sacrificing your privacy?</span></h2>
	<p>Budget Buddy doesn't believe you should have to give up your bank and credit card information just to have a plan for your money.</p>
	<p>You have the flexibility to: </p>

	<ul>
  		<li>Make your budgets by transaction type</li>
		<li>See where you're spending the most</li>
  		<li>Check out hypothetical situations for savings account and loans</li>
  		<li>Set spending alerts and see if you're meeting your goals</li>
	</ul>

	<p>And best of all - it's completely free! No ads, no data collection - just you and your money.</p>
      
    </div>
  );
}
}
export default About;
