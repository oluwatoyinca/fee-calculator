'use strict'

const { importData } = require("../utils/importData")
jest.mock('../utils/importData')

describe('importData', () => {
  it('Check that correct array is returned from importData', async () => {
    const records = await importData()
    expect(records).toEqual(
        [
            {
              Id: 'a00P0000006KXnPIAW',
              Name: 'Capers - Ox Eye Daisy',
              Description__c: 'nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu',
              Department__c: 'Support',
              Category__c: 'Tier 2',
              Sub_Category__c: 'Cat1',
              Type__c: 'TypeB',
              Quantity__c: '9',
              Unit_Price__c: '2.82'
            },
            {
              Id: 'a00P0000006KXnQIAW',
              Name: 'Lettuce - Frisee',
              Description__c: 'eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum',
              Department__c: 'Development',
              Category__c: 'Quality Assurance',
              Sub_Category__c: 'Cat1',
              Type__c: 'TypeA',
              Quantity__c: '3',
              Unit_Price__c: '39.29'
            },
            {
              Id: 'a00P0000006KXnRIAW',
              Name: 'Bag - Clear 7 Lb',
              Description__c: 'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed',
              Department__c: 'Development',
              Category__c: 'Quality Assurance',
              Sub_Category__c: 'Cat3',
              Type__c: 'TypeB',
              Quantity__c: '1',
              Unit_Price__c: '97.03'
            },
            {
              Id: 'a00P0000006KXnSIAW',
              Name: 'Pepper - Green Thai',
              Description__c: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis',
              Department__c: 'Development',
              Category__c: 'Coding',
              Sub_Category__c: 'Cat1',
              Type__c: 'TypeC',
              Quantity__c: '9',
              Unit_Price__c: '28.35'
            },
            {
              Id: 'a00P0000006KXnTIAW',
              Name: 'Table Cloth 53x53 White',
              Description__c: 'vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',
              Department__c: 'Sales',
              Category__c: 'Sales Engineering',
              Sub_Category__c: 'Cat2',
              Type__c: 'TypeB',
              Quantity__c: '8',
              Unit_Price__c: '95.96'
            },
            {
              Id: 'a00P0000006KXnUIAW',
              Name: 'Mushroom - Enoki, Dry',
              Description__c: 'lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea',
              Department__c: 'Operations',
              Category__c: 'Performance Management',
              Sub_Category__c: 'Cat1',
              Type__c: 'TypeC',
              Quantity__c: '8',
              Unit_Price__c: '38.74'
            },
            {
              Id: 'a00P0000006KXnVIAW',
              Name: 'Cookies - Assorted',
              Description__c: 'pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea',
              Department__c: 'Marketing',
              Category__c: 'ABM',
              Sub_Category__c: 'Cat3',
              Type__c: 'TypeC',
              Quantity__c: '9',
              Unit_Price__c: '56.1'
            },
            {
              Id: 'a00P0000006KXnWIAW',
              Name: 'Cheese - Victor Et Berthold',
              Description__c: 'ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris',
              Department__c: 'Operations',
              Category__c: 'Human Resources',
              Sub_Category__c: 'Cat3',
              Type__c: 'TypeC',
              Quantity__c: '3',
              Unit_Price__c: '35.5'
            },
            {
              Id: 'a00P0000006KXnXIAW',
              Name: 'Wine - Pinot Noir Mondavi Coastal',
              Description__c: 'sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla',
              Department__c: 'Development',
              Category__c: 'Coding',
              Sub_Category__c: 'Cat2',
              Type__c: 'TypeB',
              Quantity__c: '6',
              Unit_Price__c: '8.53'
            },
            {
              Id: 'a00P0000006KXnYIAW',
              Name: 'Lettuce - Mini Greens, Whole',
              Description__c: 'morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis',
              Department__c: 'Development',
              Category__c: 'Coding',
              Sub_Category__c: 'Cat3',
              Type__c: 'TypeA',
              Quantity__c: '9',
              Unit_Price__c: '68.69'
            },
            {
              Id: 'a00P0000006KXnZIAW',
              Name: 'Lettuce - Mini Greens, Whole',
              Description__c: 'morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis',
              Department__c: 'Development',
              Category__c: 'Quality Assurance',
              Sub_Category__c: 'Cat3',
              Type__c: 'TypeA',
              Quantity__c: '9',
              Unit_Price__c: '68.69'
            },
            {
              Id: 'a00P0000006KXnWIAB',
              Name: 'Cheese - Victor Et Berthold',
              Description__c: 'ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris',
              Department__c: 'Marketing',
              Category__c: 'ABM',
              Sub_Category__c: 'Cat2',
              Type__c: 'TypeC',
              Quantity__c: '3',
              Unit_Price__c: '35.5'
            },
            {
              Id: 'a00P0000006KXnXIAC',
              Name: 'Wine - Pinot Noir Mondavi Coastal',
              Description__c: 'sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla',
              Department__c: 'Marketing',
              Category__c: 'ABM',
              Sub_Category__c: 'Cat3',
              Type__c: 'TypeB',
              Quantity__c: '6',
              Unit_Price__c: '8.53'
            }
          ]
    )
  })
})