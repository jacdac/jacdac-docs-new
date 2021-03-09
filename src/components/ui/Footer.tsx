import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => createStyles({
  footer: {
    marginTop: theme.spacing(3),
    "& *": {
      fontSize: `${theme.typography.fontSize * 0.7}px`,
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    "& a:hover": {
      textDecoration: "underline",
    },
    "& a:visited": {
      color: theme.palette.text.hint,
    },
    "& a": {
      marginRight: theme.spacing(0.5),
    }
  }
}));

export default function Footer() {
  const classes = useStyles();
  return <footer role="contentinfo" className={classes.footer}>
    <a href="https://makecode.com/privacy" target="_blank" rel="noopener noreferrer">Privacy &amp; Cookies</a>
    <a href="https://makecode.com/termsofuse" target="_blank" rel="noopener noreferrer">Terms Of Use</a>
    <a href="https://makecode.com/trademarks" target="_blank" rel="noopener noreferrer">Trademarks</a>
    <Typography component="span" variant="inherit">
      © {new Date().getFullYear()} Microsoft Corporation
    </Typography>
  </footer>
}