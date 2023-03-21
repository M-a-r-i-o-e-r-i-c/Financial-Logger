import {Invoice} from './classes/invoice.js'
import { listTemplate } from './classes/listTemplate.js';
import {Payment} from './classes/payment.js'
import { HasFormatter} from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice ('Yoshi', 'web work', 200);
// docTwo = new Payment ('Mario', 'plumbing work', 320);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('mario', 'work on the Mario website', 250);
// const invTwo = new Invoice('Luigi', 'work on the Luigi website', 320);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })

const form = document.querySelector('.new-item-form')as HTMLFormElement;

// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement;

const toFrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;

const list  = new listTemplate(ul);

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice (...values);
    } else {
        doc = new Payment (...values)
    }

   list.render(doc, type.value, 'end')
})


