# GitHub Policies

*No fuss, policy-as-code for busy teams.*

GitHub Policies enable teams and organizations to continuously enforce rules and best practices that help secure and improve their development processes. It also helps ensure organizations are properly meeting required business, regulatory, and compliance requirements. And because GitHub Policies is built in, policies can be enforced immediately (not after the fact). This eliminates enforcement gaps and avoids problems surfacing later in the lifecycle.

Users are able to quickly see the status of a given policy with a UI affordance such as:


Using simple YAML files such as the one below, users can govern a wide range of GitHub configurations and behaviors, as well as the behaviors and workflows used by their teams.
More sophisticated policies are implemented in Actions-based workflows. GitHub Policies can govern *after-the-fact* or be deeply integrated into the user experience and
prevent users from straying too far from policy. A comprehensive user experience around policy compliance insights makes non-compliance easy to track and fix.

```yaml
# Basic metadata about the policy
id: public_repo_licenses

# What resources (in general) does this policy apply to? Here, all public repos
for: repositories
where:
  - resource.isPrivate == false

# States to ensure for all applicable resources? Here, a non-empty license type
ensure:
  license:
    length:
      min: 1
```
