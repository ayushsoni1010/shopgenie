const helpers = {
  validEmail: (email) => {
    let valid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let specials = /[*|\":<>[\]{}`\\()';&$]/;
    return valid.test(email) && !specials.test(email);
  },
};

export { helpers };
