import Table from '../components/Shared/Table'
import Record from '../components/Pages/Invoice/Record'
import Icon from '../components/Shared/Icon'

import { INVOICE_LIST } from '../constants/invoice_list'

const Invoice = () => {
  return (
    <section className="pt-3 pb-1 bg-[#283046] rounded-lg">
      <h1 className="mb-2 ml-5 uppercase font-semibold text-sm">Invoice list</h1>
      <div className="w-full overflow-x-auto">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>#</Table.HeaderCell>
              <Table.HeaderCell collapsing>
                <Icon name="TrendingUp" color="#d0d2d6" width={14} height={14} />
              </Table.HeaderCell>
              <Table.HeaderCell className="uppercase">Client</Table.HeaderCell>
              <Table.HeaderCell collapsing className="uppercase">
                Total
              </Table.HeaderCell>
              <Table.HeaderCell collapsing className="uppercase">
                Issued Data
              </Table.HeaderCell>
              <Table.HeaderCell collapsing className="uppercase">
                Balance
              </Table.HeaderCell>
              <Table.HeaderCell collapsing className="uppercase">
                Actions
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {INVOICE_LIST.map((item, index) => (
              <Record
                key={index}
                id={item.id}
                name={item.name}
                email={item.email}
                image={item.avatar}
                total={item.total}
                issuedDate={item.issuedDate}
                balance={item.balance}
                status={item.status}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
    </section>
  )
}

export default Invoice
