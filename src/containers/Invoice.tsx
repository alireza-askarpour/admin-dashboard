import { FC } from 'react'

import Table from '../components/shared/Table'
import Record from '../components/pages/invoice/Record'
import Icon from '../components/shared/Icon'

const LIST_ITEMS = [
  {  }
]

const Invoice: FC = () => {
  return (
    <section>
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
            <Table.HeaderCell collapsing collapse className="uppercase">
              Actions
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Record
            name="Andrew Burns"
            email="pwillis@cross.org"
            image="/images/user.png"
            total={3171}
            issuedDate="downloaded"
            balance="paid"
            status="paid"
          />
          <Record
            name="Andrew Burns"
            email="pwillis@cross.org"
            image="/images/user.png"
            total={3171}
            issuedDate="downloaded"
            balance="paid"
            status="past-due"
          />
        </Table.Body>
      </Table>
    </section>
  )
}

export default Invoice
