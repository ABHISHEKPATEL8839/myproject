import fs from 'fs'
import path from 'path';

let createoption=(body,user,product)=>{
    var html = fs.readFileSync(path.resolve()+"/template.html", "utf8");

    
    
    var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: `
<div style="max-width:800px; margin:auto; background:#ffffff; padding:20px; border:1px solid #ddd;">

    <div style="border-bottom:2px solid #333; padding-bottom:10px; margin-bottom:20px;">
        <h2 style="margin:0; color:#333;">INVOICE</h2>
        <p style="margin:5px 0;">Invoice No: <b>INV-00123</b></p>
        <p style="margin:5px 0;">Invoice Date: <b>09-Feb-2026</b></p>
    </div>

   
    <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
        <tr>
            <td style="width:50%; vertical-align:top;">
                <h3 style="margin-bottom:5px;">From</h3>
                <p style="margin:0;">ABC Electronics Pvt Ltd</p>
                <p style="margin:0;">123 Business Street</p>
                <p style="margin:0;">Mumbai, India</p>
                <p style="margin:0;">GSTIN: 27ABCDE1234F1Z5</p>
                <p style="margin:0;">Phone: 9876543210</p>
            </td>
            <td style="width:50%; vertical-align:top;">
                <h3 style="margin-bottom:5px;">Bill To</h3>
                <p style="margin:0;">Aman Patel</p>
                <p style="margin:0;">45 Customer Road</p>
                <p style="margin:0;">Ahmedabad, India</p>
                <p style="margin:0;">Phone: 9123456789</p>
            </td>
        </tr>
    </table>

 
    <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
        <tr style="background:#333; color:#fff;">
            <th style="border:1px solid #ddd; padding:8px;">#</th>
            <th style="border:1px solid #ddd; padding:8px;">Product Name</th>
            <th style="border:1px solid #ddd; padding:8px;">Qty</th>
            <th style="border:1px solid #ddd; padding:8px;">Price</th>
            <th style="border:1px solid #ddd; padding:8px;">Total</th>
        </tr>

        <tr>
            <td style="border:1px solid #ddd; padding:8px; text-align:center;">1</td>
            <td style="border:1px solid #ddd; padding:8px;">Wireless Mouse</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:center;">2</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">₹500</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">₹1000</td>
        </tr>

        <tr>
            <td style="border:1px solid #ddd; padding:8px; text-align:center;">2</td>
            <td style="border:1px solid #ddd; padding:8px;">Keyboard</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:center;">1</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">₹800</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">₹800</td>
        </tr>
    </table>


    <table style="width:100%; border-collapse:collapse;">
        <tr>
            <td style="width:70%;"></td>
            <td style="width:30%;">
                <table style="width:100%; border-collapse:collapse;">
                    <tr>
                        <td style="padding:5px;">Sub Total</td>
                        <td style="padding:5px; text-align:right;">₹1800</td>
                    </tr>
                    <tr>
                        <td style="padding:5px;">GST (18%)</td>
                        <td style="padding:5px; text-align:right;">₹324</td>
                    </tr>
                    <tr style="font-weight:bold; background:#f2f2f2;">
                        <td style="padding:8px;">Grand Total</td>
                        <td style="padding:8px; text-align:right;">₹2124</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <div style="margin-top:20px;">
        <h3>Payment Details</h3>
        <p style="margin:5px 0;">Payment Method: UPI</p>
        <p style="margin:5px 0;">Transaction ID: TXN987654</p>
        <p style="margin:5px 0;">Payment Status: <b>Paid</b></p>
    </div>`
                
            }
        };
       
        var document = {
            html: html,
            data : {},
            path: path.resolve()+"/assets/invoices/"+body.razorpay_order_id+"_invoice.pdf",
            type: "",
        };
        return {options,document}
    }
        

export default createoption