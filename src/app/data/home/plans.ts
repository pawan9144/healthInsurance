export const products = [
  {
    relationId: 1,
    img: "/assets/insurance-companies/care.png",
    name: "Care Supreme Direct",
    slug: "care-supreme-direct",
    discount: 5,
    coverAmount: "5 Lakh",
    cashlessHospitals: 292,
    monthlyPrice: 2378,
    annualPrice: 4378,
    additionalBenifits: [
      {
        plan: 1,
        details: [
          {
            name: "Safeguard Benefit",
            points: [
              {
                image: "/assets/insurance-companies/care.png",
                point:
                  "Helps in getting claim of non-payable items, no impact on NCB if the claim is up to 50,000, and guaranteed CPI linked increase in Base SI.",
              },
            ],
            price: 919,
          },
          {
            name: "Safeguard+",
            points: [
              {
                image: "/assets/insurance-companies/care.png",
                point:
                  "Helps in getting claim of non-payable items, no impact on NCB if the claim is up to 50,000, and guaranteed CPI linked increase in Base SI.",
              },
            ],
            price: 919,
          },
        ],
      },
    ],
    nestedPlans: [
      {
        relationId: 2,
        img: "/assets/insurance-companies/care.png",
        name: "Care Supreme Direct",
        slug: "care-supreme-direct-2",
        discount: 5,
        coverAmount: "5 Lakh",
        cashlessHospitals: 292,
        annualPrice: 4378,
        monthlyPrice: 2378,
        policyPeriod: [
          {
            duration: 1,
            cost: 9189,
          },
          {
            duration: 2,
            cost: 17892,
          },
          {
            duration: 3,
            cost: 25456,
          },
        ],
        cover: [
          {
            relationId: 1,
            name: "Maternity",
          },
          {
            relationId: 2,
            name: "Critical Illness",
          },
          {
            relationId: 3,
            name: "Pro Hospitalization",
          },
          {
            relationId: 4,
            name: "Post Hospitalization",
          },
        ],
        features: [
          {
            relationId: 1,
            name: "No Room Rent Limit",
            option: {
              content: "Single private a/c room",
            },
          },
          {
            relationId: 2,
            name: "7.5 Lakh No Claim Bonus",
            option: {
              content: "Single private a/c room",
            },
          },
          {
            relationId: 1,
            name: "No Room Rent Limit",
            option: {
              content: "Single private a/c room",
            },
          },
          {
            relationId: 2,
            name: "7.5 Lakh No Claim Bonus",
            option: {
              content: "Single private a/c room",
            },
          },
        ],
        details: {
          tabs: [
            {
              title: "Product Features",
              relationId: 1,
              col1: {
                heading: "Product Feature h1",
                points: [
                  {
                    key: "Inpatient treatment",
                    value: "Yes",
                  },
                  {
                    key: "Pre-hospitalization",
                    value: "30 Days",
                  },
                  {
                    key: "Post-hospitalization",
                    value: "60 Days",
                  },
                ],
              },
              col2: {
                heading: "Product Feature h2",
                relationId: 2,
                points: [
                  {
                    key: "Inpatient treatment",
                    value: "Yes",
                  },
                  {
                    key: "Pre-hospitalization",
                    value: "30 Days",
                  },
                  {
                    key: "Post-hospitalization",
                    value: "60 Days",
                  },
                ],
              },
            },
            {
              title: "Additional Benefits",
              relationId: 2,
              col1: {
                heading: "Additional Benefits Features h1",
                relationId: 1,
                points: [
                  {
                    key: "Inpatient treatment",
                    value: "Yes",
                  },
                  {
                    key: "Pre-hospitalization",
                    value: "30 Days",
                  },
                  {
                    key: "Post-hospitalization",
                    value: "60 Days",
                  },
                ],
              },
              col2: {
                heading: "Additional Benefits Features h2",
                relationId: 2,
                points: [
                  {
                    key: "Inpatient treatment",
                    value: "Yes",
                  },
                  {
                    key: "Pre-hospitalization",
                    value: "30 Days",
                  },
                  {
                    key: "Post-hospitalization",
                    value: "60 Days",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        relationId: 3,
        img: "/assets/insurance-companies/care.png",
        name: "Care Supreme Direct",
        slug: "care-supreme-direct-3",
        discount: 5,
        coverAmount: "5 Lakh",
        cashlessHospitals: 292,
        monthlyPrice: 2378,
        annualPrice: 4378,
        policyPeriod: [
          {
            duration: 1,
            cost: 9189,
          },
          {
            duration: 2,
            cost: 17892,
          },
          {
            duration: 3,
            cost: 25456,
          },
        ],
        cover: [
          {
            relationId: 1,
            name: "Maternity",
          },
          {
            relationId: 2,
            name: "Critical Illness",
          },
          {
            relationId: 3,
            name: "Pro Hospitalization",
          },
          {
            relationId: 4,
            name: "Post Hospitalization",
          },
        ],
        features: [
          {
            relationId: 1,
            name: "No Room Rent Limit",
            option: {
              content: "Single private a/c room",
            },
          },
          {
            relationId: 1,
            name: "No Room Rent Limit",
            option: {
              content: "Single private a/c room",
            },
          },
          {
            relationId: 2,
            name: "7.5 Lakh No Claim Bonus",
            option: {
              content: "Single private a/c room",
            },
          },
          {
            relationId: 1,
            name: "No Room Rent Limit",
            option: {
              content: "Single private a/c room",
            },
          },
        ],
        details: {
          tabs: [
            {
              title: "Product Features",
              relationId: 1,
              col1: {
                heading: "Product Feature h1",
                points: [
                  {
                    key: "Inpatient treatment",
                    value: "Yes",
                  },
                  {
                    key: "Pre-hospitalization",
                    value: "30 Days",
                  },
                  {
                    key: "Post-hospitalization",
                    value: "60 Days",
                  },
                ],
              },
              col2: {
                heading: "Product Feature h2",
                relationId: 2,
                points: [
                  {
                    key: "Inpatient treatment",
                    value: "Yes",
                  },
                  {
                    key: "Pre-hospitalization",
                    value: "30 Days",
                  },
                  {
                    key: "Post-hospitalization",
                    value: "60 Days",
                  },
                ],
              },
            },
            {
              title: "Additional Benefits",
              relationId: 2,
              col1: {
                heading: "Additional Benefits Features h1",
                relationId: 1,
                points: [
                  {
                    key: "Inpatient treatment",
                    value: "Yes",
                  },
                  {
                    key: "Pre-hospitalization",
                    value: "30 Days",
                  },
                  {
                    key: "Post-hospitalization",
                    value: "60 Days",
                  },
                ],
              },
              col2: {
                heading: "Additional Benefits Features h2",
                relationId: 2,
                points: [
                  {
                    key: "Inpatient treatment",
                    value: "Yes",
                  },
                  {
                    key: "Pre-hospitalization",
                    value: "30 Days",
                  },
                  {
                    key: "Post-hospitalization",
                    value: "60 Days",
                  },
                ],
              },
            },
          ],
        },
      },
    ],
    policyPeriod: [
      {
        duration: 1,
        cost: 9189,
      },
      {
        duration: 2,
        cost: 17892,
      },
      {
        duration: 3,
        cost: 25456,
      },
    ],
    cover: [
      {
        relationId: 1,
        name: "Maternity",
      },
      {
        relationId: 2,
        name: "Critical Illness",
      },
      {
        relationId: 3,
        name: "Pro Hospitalization",
      },
      {
        relationId: 4,
        name: "Post Hospitalization",
      },
    ],
    features: [
      {
        relationId: 1,
        name: "No Room Rent Limit",
        option: {
          content: "Single private a/c room",
        },
      },
      {
        relationId: 2,
        name: "7.5 Lakh No Claim Bonus",
        option: {
          content: "Single private a/c room",
        },
      },
      {
        relationId: 1,
        name: "No Room Rent Limit",
        option: {
          content: "Single private a/c room",
        },
      },
      {
        relationId: 2,
        name: "7.5 Lakh No Claim Bonus",
        option: {
          content: "Single private a/c room",
        },
      },
    ],
    details: {
      tabs: [
        {
          title: "Product Features",
          relationId: 1,
          col1: {
            heading: "Product Feature h1",
            points: [
              {
                key: "Inpatient treatment",
                value: "Yes",
              },
              {
                key: "Pre-hospitalization",
                value: "30 Days",
              },
              {
                key: "Post-hospitalization",
                value: "60 Days",
              },
            ],
          },
          col2: {
            heading: "Product Feature h2",
            relationId: 2,
            points: [
              {
                key: "Inpatient treatment",
                value: "Yes",
              },
              {
                key: "Pre-hospitalization",
                value: "30 Days",
              },
              {
                key: "Post-hospitalization",
                value: "60 Days",
              },
            ],
          },
        },
        {
          title: "Additional Benefits",
          relationId: 2,
          col1: {
            heading: "Additional Benefits Features h1",
            relationId: 1,
            points: [
              {
                key: "Inpatient treatment",
                value: "Yes",
              },
              {
                key: "Pre-hospitalization",
                value: "30 Days",
              },
              {
                key: "Post-hospitalization",
                value: "60 Days",
              },
            ],
          },
          col2: {
            heading: "Additional Benefits Features h2",
            relationId: 2,
            points: [
              {
                key: "Inpatient treatment",
                value: "Yes",
              },
              {
                key: "Pre-hospitalization",
                value: "30 Days",
              },
              {
                key: "Post-hospitalization",
                value: "60 Days",
              },
            ],
          },
        },
      ],
    },
  },
];

export const compariableData = [
  {
    name: "No Room Rent Limit",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "7.5 Lakh No Claim Bonus",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "No Room Rent Limit",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "Unlimited Restoration of cover",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
    buyNowBtn: true,
  },
];

export const compariableDataDetailed = [
  {
    name: "No Room Rent Limit",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "7.5 Lakh No Claim Bonus",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "No Room Rent Limit",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "Unlimited Restoration of cover",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "No Room Rent Limit",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "7.5 Lakh No Claim Bonus",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "No Room Rent Limit",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
  },
  {
    name: "Unlimited Restoration of cover",
    desc: `Claim Settlement Ratio
    This is explained as (Number of Claims Settled / Number of Claims) by the Insurance Company.`,
    buyNowBtn: true,
  },
];
