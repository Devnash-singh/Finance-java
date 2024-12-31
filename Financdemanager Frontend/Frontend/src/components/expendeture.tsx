import React from 'react'
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/Card'

export default function Expendeture() {
  return (
    <div className='font-mono my-20'>
     <Card>
      <CardHeader>
        <CardTitle className='text-5xl'>Expendetures</CardTitle>
        <CardDescription>Recent Invoices</CardDescription>
        </CardHeader> <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell> </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV003</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Bank Transfer</TableCell>
      <TableCell className="text-right">$300.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV004</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$450.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV005</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">$200.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV006</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Bank Transfer</TableCell>
      <TableCell className="text-right">$500.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV007</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$350.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV008</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">$400.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV009</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>Bank Transfer</TableCell>
      <TableCell className="text-right">$600.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV010</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$700.00</TableCell>
    </TableRow>
   
  </TableBody>
</Table>
</Card>

    </div>
  )
}