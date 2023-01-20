import React, { useState } from "react";
import PrismCode from "../../../Components/Common/Prism";
import {
  Card,
  CardBody,
  Col,
  CardHeader,
  Input,
  Label,
  Row,
  Table,
  FormGroup,
  Button,
} from "reactstrap";
import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader";
import { Link } from "react-router-dom";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Select from "react-select";

const columnHelper = createColumnHelper();

const defaultData = [
  {
    CallDateTime: "tanner",
    InboundCallId: "linsley",
    Publisher: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    CallDateTime: "tandy",
    InboundCallId: "miller",
    Publisher: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    CallDateTime: "joe",
    InboundCallId: "dirte",
    Publisher: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columns = [
  columnHelper.accessor("CallDateTime", {
    cell: (info) => info.getValue(),
    header: () => <span>Call Date Time</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.InboundCallId, {
    id: "InboundCallId",
    cell: (info) => info.getValue(),
    header: () => <span>Inbound Call Id</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Publisher, {
    id: "Publisher",
    cell: (info) => info.getValue(),
    header: () => <span>Publisher</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Campaign, {
    id: "Campaign",
    cell: (info) => info.getValue(),
    header: () => <span>Campaign</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Target, {
    id: "Target",
    cell: (info) => info.getValue(),
    header: () => <span>Target</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Buyer, {
    id: "Buyer",
    cell: (info) => info.getValue(),
    header: () => <span>Buyer</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.LeadSource, {
    id: "LeadSource",
    cell: (info) => info.getValue(),
    header: () => <span>Lead Source</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.ConnectedDurationSec, {
    id: "ConnectedDurationSec",
    cell: (info) => info.getValue(),
    header: () => <span>Connected Duration</span>,
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor((row) => row.Payout, {
  //   id: "Payout",
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Payout</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor((row) => row.Dialed, {
  //   id: "Dialed",
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Dialed</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor((row) => row.TelcoCost, {
  //   id: "TelcoCost",
  //   cell: (info) => info.getValue(),
  //   header: () => <span>TelcoCost</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor((row) => row.ConversionAdjusted, {
  //   id: "ConversionAdjusted",
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Conversion Adjusted</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor((row) => row.PayoutAdjusted, {
  //   id: "PayoutAdjusted",
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Payout Adjusted</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor((row) => row.ConversionAdjusted, {
  //   id: "ConversionAdjusted",
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Conversion Adjusted</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor((row) => row.IsConverted, {
  //   id: "IsConverted",
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Converted</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor((row) => row.ConversionAdjusted, {
  //   id: "ConversionAdjusted",
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Conversion Adjusted</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor((row) => row.IsBillable, {
  //   id: "IsBillable",
  //   cell: (info) => info.getValue(),
  //   header: () => <span>Billable</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("age", {
  //   header: () => "Age",
  //   cell: (info) => info.renderValue(),
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("visits", {
  //   header: () => <span>Visits</span>,
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("status", {
  //   header: "Status",
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("progress", {
  //   header: "Profile Progress",
  //   footer: (info) => info.column.id,
  // }),
];

const keys = [
  {
    value: "Hangup",
    label: "Hangup",
  },
  {
    value: "CallerId",
    label: "CallerId",
  },
  {
    value: "InboundCallId",
    label: "InboundCallId",
  },
  {
    value: "Publisher",
    label: "Publisher",
  },
  {
    value: "PublisherId",
    label: "PublisherId",
  },
  {
    value: "Revenue",
    label: "Revenue",
  },
  {
    value: "Campaign",
    label: "Campaign",
  },
  {
    value: "Target",
    label: "Target",
  },
  {
    value: "TargetId",
    label: "TargetId",
  },
  {
    value: "Buyer",
    label: "Buyer",
  },
  {
    value: "BuyerId",
    label: "BuyerId",
  },
  {
    value: "ConnectedDurationSec",
    label: "ConnectedDurationSec",
  },
  {
    value: "Duplicate",
    label: "Duplicate",
  },
  {
    value: "Payout",
    label: "Payout",
  },
  {
    value: "Dialed",
    label: "Dialed",
  },
  {
    value: "RecordingUrl",
    label: "RecordingUrl",
  },
  {
    value: "TelcoCost",
    label: "TelcoCost",
  },
  {
    value: "ConversionAdjusted",
    label: "ConversionAdjusted",
  },
  {
    value: "PayoutAdjusted",
    label: "PayoutAdjusted",
  },
  {
    value: "IsConverted",
    label: "IsConverted",
  },
  {
    value: "IsBillable",
    label: "IsBillable",
  },
  {
    value: "JornayaId",
    label: "JornayaId",
  },
  {
    value: "LeadSource",
    label: "LeadSource",
  },
  { value: "CallDateTime", label: "CallDateTime" },
];

const SingleOptions = [
  { value: "Choices 1", label: "Choices 1" },
  { value: "Choices 2", label: "Choices 2" },
  { value: "Choices 3", label: "Choices 3" },
  { value: "Choices 4", label: "Choices 4" },
];

export default function DataTable() {
  const [data, setData] = useState([...defaultData]);
  // const [columns, setColumns] = useState();
  const [selectedMulti, setSelectedOption] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!columns) return <></>;
  return (
    <>
      <Row>
        {/* <Col lg={12}>
          <Card>
            <CardHeader className="align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">Select Columns</h4>
            </CardHeader>
            <CardBody>
              <Row>
                {keys.map((i) => (
                  <Col lg={3} key={i}>
                    <div className="form-check">
                      <Label>{i}</Label>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkAll"
                        defaultValue="option1"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col> */}
        <Col lg={12}>
          <Card>
            <CardBody>
              <div className="row justify-content-between align-items-center">
                <Col xl={selectedColumns.length > 1 ? 8 : 5} className="mb-0 pb-0">
                  <FormGroup row className="mb-0-imp align-items-center">
                    <Label for="exampleEmail" sm={selectedColumns.length > 1 ? 3 : 4}>
                      Select Columns
                    </Label>
                    <Col sm={8}>
                      <Select
                        value={selectedColumns}
                        onChange={(e) => {
                          setSelectedColumns(e);
                        }}
                        isMulti={true}
                        options={keys}
                        name="choices-single-default"
                        id="idStatus"
                      ></Select>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xl={4}>
                  <div className="d-flex justify-content-end">
                    <Button color="info" size="sm">
                      Export as PDF
                    </Button>
                    <Button className="ms-3" size="sm" color="primary">
                      Export as CSV
                    </Button>
                  </div>
                </Col>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <CardBody>
              <div className="live-preview">
                <Row>
                  <Col xl={12}>
                    <div className="table-responsive">
                      <Table className="table-hover align-middle table-nowrap mb-0">
                        <thead>
                          {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                              {headerGroup.headers.map((header) => (
                                <th
                                  key={header.id}
                                  onClick={header.column.getToggleSortingHandler()}
                                >
                                  {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                      )}

                                  {{
                                    asc: " 🔼",
                                    desc: " 🔽",
                                  }[header.column.getIsSorted()] ?? null}

                                  <div className="form-check mt-2">
                                    <Select
                                      value={selectedMulti}
                                      isMulti={true}
                                      onChange={() => {
                                        //   handleMulti();
                                      }}
                                      options={SingleOptions}
                                    />
                                  </div>
                                </th>
                              ))}
                            </tr>
                          ))}

                          {/* <tr>
                            <th scope="col" style={{ width: "25px" }}>
                              <div className="form-check">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkAll"
                                  defaultValue="option1"
                                />
                              </div>
                            </th>
                            <th scope="col">
                              Order ID
                              <Select
                                value={selectedMulti}
                                isMulti={true}
                                onChange={() => {
                                  //   handleMulti();
                                }}
                                options={SingleOptions}
                              />
                            </th>
                            <th scope="col">Shop</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                          </tr> */}
                        </thead>
                        <tbody>
                          {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                              {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                  {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                          {/* <tr>
                            <th scope="row">
                              <div className="form-check">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  value="option1"
                                  defaultChecked
                                />
                              </div>
                            </th>
                            <td>#541254265</td>
                            <td>Amezon</td>
                            <td>Cleo Carson</td>
                            <td>$4,521</td>
                            <td>
                              <Link to="#">
                                <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox3"
                                  defaultValue="option1"
                                  defaultChecked
                                />
                              </div>
                            </th>
                            <td>#744145235</td>
                            <td>Shoppers</td>
                            <td>Juston Eichmann</td>
                            <td>$7,546</td>
                            <td>
                              <Link to="#">
                                <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox4"
                                  defaultValue="option1"
                                />
                              </div>
                            </th>
                            <td>#9855126598</td>
                            <td>Flipkart</td>
                            <td>Bettie Johson</td>
                            <td>$1,350</td>
                            <td>
                              <Link to="#">
                                <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox5"
                                  defaultValue="option1"
                                />
                              </div>
                            </th>
                            <td>#847512653</td>
                            <td>Shoppers</td>
                            <td>Maritza Blanda</td>
                            <td>$4,521</td>
                            <td>
                              <Link to="#">
                                <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
                              </Link>
                            </td>
                          </tr> */}
                        </tbody>
                        {/* <tfoot>
                          {table.getFooterGroups().map((footerGroup) => (
                            <tr key={footerGroup.id}>
                              {footerGroup.headers.map((header) => (
                                <th key={header.id}>
                                  {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.footer,
                                        header.getContext()
                                      )}
                                </th>
                              ))}
                            </tr>
                          ))}
                        </tfoot> */}
                      </Table>
                      <div className="mt-4 d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                          <ul class="pagination">
                            <li class="page-item">
                              <a class="page-link" href="#">
                                Previous
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
