export const proposerData = {
  summary: {
    planFor: "Self",
    age: "18+",
    location: "Hyderabad",
    gender: "Male",
    sumInsured: 10000,
    totalPrice: 9188,
  },
  tabs: [
    {
      tab: "Proposer Details",
      heading: "Great! Let’s start with proposer details",
      desc: "Proposer is going to pay the premium and avail tax benefits.",
      btns: ["Self", "Spouse", "Son", "Daughter"],
      fields: ["Name", "Marital Status", "Gender"],
    },
    {
      tab: "Personal Details",
      heading: "Personal Details",
      desc: "Information required about the member to be insured",
      btns: ["Self", "Spouse", "Son", "Daughter"],
      fields: [
        "DOB",
        "Occupation",
        "Height(feet)",
        "Weight(kg)",
        "CKyc",
        "PAN Card",
        "GST Number",
        "Dropdown",
        "Text Field",
        "Input File",
      ],
    },
    {
      tab: "Address",
      heading: "Address",
      desc: "It will be used to send physical copy of your policy.",
      btns: ["Self", "Spouse", "Son", "Daughter"],
      fields: [
        "Flat/House number",
        "Colony, Street",
        "City",
        "State",
        "Pin Code",
      ],
    },
    {
      tab: "Contact Details",
      heading: "Contact Details",
      desc: "It will be used to send digital copy of your policy.",
      btns: ["Self", "Spouse", "Son", "Daughter"],
      fields: ["Email Address", "Mobile", "Primary Mobile No. "],
    },
  ],
};

export const medicalConditionData = {
  heading: "Help us know the medical condition, if any",
  desc: "We’ll only ask for the details insurance companies need",
  conditions: [
    " Has any proposal for life, health, hospital daily cash, Personal Accident or critical illness insurance on the life of the applicant ever been declined, postponed, loaded or subjected to any special conditions such as exclusions by any insurance company?",
    "Are you a politically exposed person (PEP) or a close relative of PEP?",
    "Other than common cold, flu, infections, minor injury or other minor ailments; have you ever been hospitalized for more than 5 days, undergone / advised to undergo any surgical procedures, or taken any medication/ had any symptoms for more than 14 days? Medication is including but not limited to inhalers, injections, oral drugs and topical applications",
  ],
};
