import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'

const IndexPage = () => {
  return (
    <div style={{ padding: 80, alignItems: 'center' }}>
      <p>
        <h1  style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
        >
        นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ<br />
        นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ<br />
        นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ<br />
        </h1>
      </p>
      <br />
      <h2>ขอนอบน้อมแด่พระผู้มีพระภาคเจ้า พระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส ตรัสรู้ชอบได้โดยพระองค์เอง</h2>
      <br />
      <Button.Group size="large">
        <Button type="primary" size="large">
          <Link to="/docs/template/get-started/introduction">พระไตรปิฎก</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
