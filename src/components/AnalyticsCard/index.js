import React from "react";
import { Typography, Box, Paper } from "@material-ui/core";

const colors = ["#7ce7ac", "#facf55", "#e6492d"];

export default function AnalyticsCard({
  title,
  count,
  footerText,
  risk,
  ...rest
}) {
  return (
    <Box
      height="190px"
      width="255px"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.04)"
      border="solid 1px #eaedf3"
      component={Paper}
      pt={6.5}
      pb={4.5}
      px={7.5}
      {...rest}
    >
      <Typography variant="caption" color="textSecondary">{title}</Typography>
      <Box pt={1} pb={3} borderBottom="1px solid #eaedf3" mb={4}>
        <Typography variant="h1">{count}</Typography>
      </Box>
      <Typography variant="caption" color="textSecondary">{footerText}</Typography>
      {risk && (
        <Box width="100%" height="24px" overflow="hidden" display="flex" borderRadius={4}>
          {risk.map((value, index) => (
            <Box
              height="100%"
              width={value + "%"}
              bgcolor={colors[index]}
              key={index}
            ></Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
