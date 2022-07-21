import * as React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';

export const ReportListResults = ({ reports, ...rest }) => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Employee's Name
                </TableCell>
                <TableCell>
                  Employee's ID
                </TableCell>
                <TableCell>
                  Project
                </TableCell>
                <TableCell>
                  Contract Type
                </TableCell>
                <TableCell>
                  Payment Date
                </TableCell>
                <TableCell>
                  Gross Salary
                </TableCell>
                <TableCell>
                  Total Benefits Cost
                </TableCell>
                <TableCell>
                  Total Employer Mandatory Deductions
                </TableCell>
                <TableCell>
                  Total employee Mandatory Deductions
                </TableCell>
                <TableCell>
                  Total employee Voluntary Deductions
                </TableCell>
                <TableCell>
                  Total Cost
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.slice(page * limit, page * limit + limit).map(report => (
                <TableRow
                  hover
                  key={report.employeeName + report.employeeID + report.projectName + report.contractType + report.paymentDate}
                >
                  <TableCell>
                    {report.employeeName}
                  </TableCell>
                  <TableCell>
                    {report.employeeID}
                  </TableCell>
                  <TableCell>
                    {report.projectName}
                  </TableCell>
                  <TableCell>
                    {report.contractType}
                  </TableCell>
                  <TableCell>
                    {report.paymentDate}
                  </TableCell>
                  <TableCell>
                    ${parseFloat(report.grossSalary).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    ${parseFloat(report.benefitsCost).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    ${parseFloat(report.employerMandatoryDeductions).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    ${parseFloat(report.employeeMandatoryDeductions).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    ${parseFloat(report.voluntaryDeductions).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    ${parseFloat(report.totalCost).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={reports.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ReportListResults.propTypes = {
  reports: PropTypes.array.isRequired
};